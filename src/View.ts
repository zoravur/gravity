import Vec, { Vector } from './Vec';
import Projectile from './Projectile';
import * as interpolate from 'color-interpolate';

let cx: CanvasRenderingContext2D;
export function render(canvas: HTMLCanvasElement, itemsToRender, rules) {
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
};

const drawPathHistory = (cx, path, mass) => {
    cx.fillStyle = cx.strokeStyle = colormap(Math.log10(Math.max(mass, 1))/4);

    cx.beginPath();
    path.forEach(({x, y}) => {
        cx.lineTo(x,y);
    });
    cx.stroke();

}


const drawProjectile = (cx, proj, options?) => {
    cx.fillStyle = cx.strokeStyle = computeProjectileColor(proj);

    cx.beginPath();
    cx.arc(proj.position.x, proj.position.y,
         (proj._radius || Projectile.prototype.computeRadius.apply(proj)), 0, 2*Math.PI);
    cx.fill();

    let pos = Object.assign(Vec(), proj.position);
    let vel = Object.assign(Vec(), proj.velocity);
    let accel = Object.assign(Vec(), proj.acceleration);
    if (options.velocityArrow)
      arrow(cx, pos, pos.plus(vel));
    if (options.accelerationArrow)
      arrow(cx, pos, pos.plus(accel));
}


const drawInput = (cx, {start, end}) => {
    cx.strokeStyle = 'blue';
    cx.beginPath();
    cx.moveTo(start.x, start.y);
    cx.lineTo(end.x, end.y);
    cx.stroke();
}


let colormap = interpolate(['white', 'brown', 'orange', 'red']);
function computeProjectileColor(proj: Projectile) {
    return colormap(Math.log10(Math.max(proj.mass, 1))/4);
}


let arrow = (cx: CanvasRenderingContext2D, s: Vector, e: Vector) => {
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


export {arrow};

