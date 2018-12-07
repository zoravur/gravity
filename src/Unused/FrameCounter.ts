// import Vec from './Vec';
// let previous = performance.now();
// let counter = 0;
// export default function FrameCount(canvas: HTMLCanvasElement, offset = Vec(10,10), size = Vec(100,40)) {
//     let animate = window.requestAnimationFrame;
//     let cx = canvas.getContext('2d');
//     const width = 1;
//     window.requestAnimationFrame = function (callback: FrameRequestCallback) {
//         let delta = performance.now() - previous;
//         previous += delta;
//         let column = counter++ % (size.x / width);

//         cx.strokeStyle = 'black';
//         cx.beginPath();
//         cx.moveTo(column*width + offset.x, size.y + offset.y);
//         cx.lineTo(column*width + offset.x, size.y + offset.y - 60);
//         cx.stroke();

//         cx.strokeStyle = 'white';
//         cx.strokeRect(offset.x, offset.y, size.x, size.y);
//         cx.beginPath();
//         cx.moveTo(column*width + offset.x, size.y + offset.y);
//         cx.lineTo(column*width + offset.x, size.y + offset.y - delta);
//         cx.stroke();

//         return animate(callback);
//     }

// }