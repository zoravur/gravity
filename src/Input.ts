import Vec, {Vector} from './lib/Vec';
import Subject from "./Subject";
import Arrow from "./Arrow";

/**
 * Construct an input event type for the purposes of the observer pattern
 */

interface InputEvent {
    inputArrow?: Arrow;
    newProjectile?: Arrow;
    cameraUpdate?: Vector;
}

class Input extends Subject<InputEvent> {
    drawInput: Function;
    camera: any;
    canvas: HTMLCanvasElement;
    cx: CanvasRenderingContext2D;
    getInputLine: Function;

    constructor(canvas: HTMLCanvasElement) {
        super();
        this.drawInput = () => {};
        this.getInputLine = () => {};
        this.canvas = canvas;
        this.cx = canvas.getContext('2d');
        this.camera = {
            delta: Vec(0, 0),
            position: Vec(0, 0)
        }
        canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    }

    handleMouseDown(event: MouseEvent) {
        if (event.shiftKey) {
            this.beginViewDrag(Vec(event.offsetX, event.offsetY));
        } else {
            this.beginVectorDraw(Vec(event.offsetX, event.offsetY));
        }
    }

    beginViewDrag(startVec: any) {
        let canvas: HTMLCanvasElement = this.canvas;
        let camera = this.camera;
        
        let moveHandle = event => {
            this.camera.delta = Vec(event.offsetX, event.offsetY).minus(startVec);
            this.emit({cameraUpdate: this.camera.position.plus(this.camera.delta)});
        }
        canvas.addEventListener('mousemove', moveHandle);
    
        let upHandle = event => {
            camera.position = camera.delta.plus(camera.position);
            camera.delta = Vec();
            canvas.removeEventListener('mousemove', moveHandle);
            canvas.removeEventListener('mouseup', upHandle);
        }
        canvas.addEventListener('mouseup', upHandle);
    }

    beginVectorDraw(startVec) {
        let canvas: HTMLCanvasElement = this.canvas;
        startVec = startVec.minus(this.camera.position); // Correct for camera placement

        let moveHandle = event => {
            let end = Vec(event.offsetX, event.offsetY)
            end = end.minus(this.camera.position);

            this.emit({
                inputArrow: {
                    start: startVec, delta: end.minus(startVec)
                }
            })
        }
        canvas.addEventListener('mousemove', moveHandle);

        let upHandle = event => {
            let end = Vec(event.offsetX, event.offsetY)
            end = end.minus(this.camera.position);
            this.drawInput = () => {};
            this.getInputLine = () => {};
            let delta = end.minus(startVec);

            this.emit({
                newProjectile: {
                    start: startVec,
                    delta
                }
            })

            canvas.removeEventListener('mousemove', moveHandle);
            canvas.removeEventListener('mouseup', upHandle);
        }
        canvas.addEventListener('mouseup', upHandle);
    }
}

export default Input;
export {
    InputEvent
}