import Vec, { Vector } from './lib/Vec';
import Projectile from './worker/Projectile';
import * as interpolate from 'color-interpolate';
import Arrow from "./Arrow";

interface RenderingRules {
    forceVectors: boolean;
    velocityVectors: boolean;
    paths: boolean;
    cameraOrigin: Vector;
}

interface ItemsToRender {
    projectiles: Array<Projectile>;
    pathHistory?: Map<string, Array<Vector>>;
    inputArrow?: Arrow;
}

class Renderer {
    canvas: HTMLCanvasElement;
    cx: CanvasRenderingContext2D;
    background: HTMLCanvasElement;
    bgx: CanvasRenderingContext2D;

    rules: RenderingRules;
    constructor(canvas: HTMLCanvasElement, background: HTMLCanvasElement) {
        this.canvas = canvas;
        this.background = background;
        this.cx = this.canvas.getContext('2d');
        this.cx.lineWidth = 1;
        this.bgx = this.background.getContext('2d');
        this.rules = {
            forceVectors: false,
            velocityVectors: false,
            paths: false,
            cameraOrigin: Vec(0,0)
        }
    }

    setRules(rules: RenderingRules) {
        this.rules = rules;
    }

    render(itemsToRender) {
        requestAnimationFrame(() => this._render(itemsToRender));
    }

    clearBackground() {
        requestAnimationFrame(() => {
            this.bgx.fillRect(0,0,this.background.width, this.background.height);
        })
    }

    _render(itemsToRender : ItemsToRender) {
        let cx = this.cx;
        let bgx = this.bgx;

        cx.clearRect(0,0,this.canvas.width,this.canvas.height);
        cx.save();
        bgx.save();
        cx.translate(0.5,0.5);
        bgx.translate(0.5, 0.5);

        if (!this.rules.cameraOrigin.equals(Vec(0,0))) {
            // TODO: Update camera position
            let {x, y} = this.rules.cameraOrigin;
            cx.translate(x, y);
            bgx.translate(x, y);
        }

        if (itemsToRender.inputArrow) {
            let { start, delta } = itemsToRender.inputArrow;
            let end = start.plus(delta);

            cx.save();
            cx.strokeStyle = 'blue';
            cx.beginPath();
            cx.moveTo(start.x, start.y);
            cx.lineTo(end.x, end.y);
            cx.stroke();
            cx.restore();
        }

        const drawProjectileAndPath = (projectile: Projectile) => {
            /*
            if (this.rules.paths) {
                let path: Vector[] = itemsToRender.pathHistory.get(projectile.id);
                drawProjectilePath(this.bgx, path, projectile.mass);
            }
             */
            if (this.rules.paths) {
                drawDot(this.bgx, projectile.position, projectile.mass);
            }
            drawProjectile(this.cx, projectile, this.rules);
        }

        itemsToRender.projectiles.forEach(drawProjectileAndPath);

        cx.restore();
        bgx.restore();
    }

}

const drawDot = (cx : CanvasRenderingContext2D, point : Vector, mass : number) => {
    cx.fillStyle = cx.strokeStyle = colorMap(Math.log10(Math.max(mass, 1))/4);
    cx.beginPath();
    cx.fillRect(point.x, point.y, 0.7, 0.7);
    cx.stroke();
}

const drawProjectilePath = (cx, path, mass) => {
    cx.fillStyle = cx.strokeStyle = colorMap(Math.log10(Math.max(mass, 1))/4);

    cx.beginPath();
    path.forEach(({x, y}) => {
        cx.lineTo(x,y);
    });
    cx.stroke();
}

const drawProjectile = (cx: CanvasRenderingContext2D, proj: Projectile, options?: RenderingRules) => {
    cx.fillStyle = cx.strokeStyle = computeProjectileColor(proj);

    cx.beginPath();
    cx.arc(proj.position.x, proj.position.y,
         (proj._radius || Projectile.prototype.computeRadius.apply(proj)), 0, 2*Math.PI);
    cx.fill();

    let pos = Object.assign(Vec(), proj.position);
    let vel = Object.assign(Vec(), proj.velocity);
    let accel = Object.assign(Vec(), proj.acceleration);
    if (options.velocityVectors) {
        drawArrow(cx, pos, pos.plus(vel));
    }
    if (options.forceVectors) {
        drawArrow(cx, pos, pos.plus(accel));
    }
}

const drawInput = (cx, arrow: Arrow) => {
    let start = arrow.start;
    let end = arrow.start.plus(arrow.delta);
    cx.strokeStyle = 'blue';
    cx.beginPath();
    cx.moveTo(start.x, start.y);
    cx.lineTo(end.x, end.y);
    cx.stroke();
}


let colorMap = interpolate(['white', 'brown', 'orange', 'red']);
function computeProjectileColor(proj: Projectile) {
    return colorMap(Math.log10(Math.max(proj.mass, 1))/4);
}


let drawArrow = (cx: CanvasRenderingContext2D, s: Vector, e: Vector) => {
    cx.beginPath();
    cx.moveTo(s.x, s.y);
    cx.lineTo(e.x, e.y);
    cx.stroke();
    cx.beginPath();
    cx.moveTo(e.x, e.y);
    let {x, y} = e.minus(s).normalize().times(7).rotate(5/6*Math.PI).plus(e);
    cx.lineTo(x,y);
    ({x, y} = e.minus(s).normalize().times(7).rotate(-5/6*Math.PI).plus(e));
    cx.lineTo(x,y);
    cx.closePath();
    cx.fill();
}

export default Renderer;
export {
    ItemsToRender,
    RenderingRules
}

/*
function render(canvas: HTMLCanvasElement, itemsToRender, rules) {
    if (!cx) cx = canvas.getContext('2d');
    cx.clearRect(0, 0, canvas.width, canvas.height);
    cx.save();

    if (rules.transform) {
        let {x, y} = rules.transform;
        cx.translate(x, y);
    }

    if (<Map<number, {number, Array }> >itemsToRender.history) {
        if (rules.paths) {
            let history = itemsToRender.history;
            for (let proj of history) {
                proj = proj[1];
                drawPathHistory(cx, proj.position, proj.mass);
            }
        }
    }

    let state = itemsToRender.projectiles;
    (state || console.log(`state is being weird: ${JSON.stringify(state)}`)) && state.forEach(proj => {
        cx.save();
        drawProjectile(cx, proj, rules);
        cx.restore();
    })

    if (itemsToRender.inputLine) {
        let inputLine = itemsToRender.inputLine;
        cx.save();
        drawInput(cx, inputLine);
        cx.restore();
    }

    cx.restore();
}

 */

