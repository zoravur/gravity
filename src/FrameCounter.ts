import Vec from './Vec';
let previous = performance.now();
let counter = 0;
export default function FrameCount(canvas: HTMLCanvasElement, offset = Vec(10,10), size = Vec(100,20)) {
    let animate = window.requestAnimationFrame;
    let cx = canvas.getContext('2d');
    const width = 1;
    let frames = Array.apply(null, Array(5)).map(() => 0);
    window.requestAnimationFrame = function (callback: FrameRequestCallback) {
        let delta = performance.now() - previous;
        previous += delta;
        let column = counter++ % (size.x / width);
        frames[column] = delta;
        cx.save();
        cx.strokeStyle = 'white';
        cx.strokeRect(offset.x, offset.y, size.x, size.y);
        cx.beginPath();
        frames.forEach((col, idx) => {
            cx.moveTo(idx*width + offset.x, size.y + offset.y);
            cx.lineTo(idx*width + offset.x, size.y + offset.y - col);
        });
        cx.stroke();
        cx.restore();
        
        return animate(callback);
    }

}