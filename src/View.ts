import { Vector } from './Vec';
import State, { ProjectilePath } from './State';
import Projectile from './Projectile';
import * as d3 from 'd3';

let cx: CanvasRenderingContext2D;
export function render(canvas: HTMLCanvasElement, state: State) {
    //let cx = canvas.getContext('2d');
    if (!cx) cx = canvas.getContext('2d');
    state.history.forEach((path: ProjectilePath) => {
        let line = d3.line().context(cx);
        cx.save();
        cx.strokeStyle = Projectile.prototype.computeColor.apply(path);
        cx.beginPath();
        line(path.path.map((vec):[number, number] => [vec.x, vec.y]));
        cx.stroke();
         
    });
    state.draw(cx);
};

let arrow = (cx: CanvasRenderingContext2D, s: Vector, e: Vector) => {
    cx.beginPath();
    cx.moveTo(s.x, s.y);
    cx.lineTo(e.x, e.y);
    cx.stroke();
    cx.beginPath();
    cx.moveTo(e.x, e.y);
    let {x, y} = e.minus(s).normalize().times(7).rotate(5/6*Math.PI).plus(e);
    //console.log(x,y);
    cx.lineTo(x,y);
    ({x, y} = e.minus(s).normalize().times(7).rotate(-5/6*Math.PI).plus(e));
    cx.lineTo(x,y);
    //console.log(x,y);
    cx.closePath();
    cx.fill();
}

export {arrow};

