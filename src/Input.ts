import Projectile from './Projectile';
import Vec from './Vec';
import State from './State';

'use strict';
export default class Input {
    addProjectile: Function; 
    drawInput: Function; 
    camera: any;
    canvas: HTMLCanvasElement;
    cx: CanvasRenderingContext2D;
    massField: HTMLInputElement;
    
    constructor(canvas: HTMLCanvasElement, state: State, massField: HTMLInputElement) {
        this.drawInput = () => {};
        this.massField = massField;
        this.canvas = canvas;
        this.cx = canvas.getContext('2d');
        this.addProjectile = this.bindState(state);
        this.camera = {
            delta: Vec(),
            position: Vec()
        }
        canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    }

    bindState(state) {
        return function addProjectile(proj) {
            state.add(proj);
        }
    }

    getTransform() {
        return this.camera.position.plus(this.camera.delta);
    }

    setTransform(reverse? : boolean) {
        let {x, y} = this.getTransform();
        if (reverse) this.cx.translate(-x, -y);
        else this.cx.translate(x, y);
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
            let delta = Vec(event.offsetX, event.offsetY).minus(startVec);
            camera.delta = delta;
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
            this.drawInput = () => {
                this.cx.save();
                this.cx.strokeStyle = 'blue';
                this.cx.beginPath();
                this.cx.moveTo(startVec.x, startVec.y);
                this.cx.lineTo(end.x, end.y);
                this.cx.stroke();
                this.cx.restore();
            }
        }
        canvas.addEventListener('mousemove', moveHandle);

        let upHandle = event => {
            let end = Vec(event.offsetX, event.offsetY)
            end = end.minus(this.camera.position);
            this.drawInput = () => {};
            let delta = end.minus(startVec);
            this.addProjectile(new Projectile(startVec, delta, +this.massField.value));

            canvas.removeEventListener('mousemove', moveHandle);
            canvas.removeEventListener('mouseup', upHandle);
        }
        canvas.addEventListener('mouseup', upHandle);
    }
}