import { Vector } from './Vec';
import State, { ProjectilePath } from './State';
import Projectile from './Projectile';
import * as d3 from 'd3';

export function render(canvas: HTMLCanvasElement, state: State) {
    let cx = canvas.getContext('2d');
    state.history.forEach((path: ProjectilePath) => {
        let line = d3.line().context(cx);
        cx.save();
        cx.strokeStyle = Projectile.prototype.computeColor.apply(path);
        cx.beginPath();
        line(path.path.map((vec):[number, number] => [vec.x, vec.y]))
        cx.stroke();  
    })
    state.draw(cx);
}