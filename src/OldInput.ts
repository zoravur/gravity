// This class requires a canvas and a state of projectiles as references.
// It sets up event handlers. Currently it can't add non 100 mass particles.

import Projectile from './Projectile';
import Vec from './Vec';
import State from './State';

export default class Input {
  clickAndDrag: {};
  started: boolean;
  ended: boolean;
  state: State;
  canv: HTMLCanvasElement
  camX: number;
  camY: number;
  dCamX: number;
  dCamY: number;
  shiftingCamera: boolean;
  startX: any;
  startY: any;
  endX: any;
  endY: any;
  constructor(canv: HTMLCanvasElement, state: State) {
    console.log('construct');
    this.clickAndDrag = {};
    this.started = false;
    this.ended = false;
    this.state = state;
    this.canv = canv;
    this.camX = 0;
    this.camY = 0;
    this.dCamX = 0;
    this.dCamY = 0;
    this.shiftingCamera = false;
    canv.addEventListener('mouseup', this.handleMouseUp.bind(this));
    canv.addEventListener('mousedown', this.handleMouseDown.bind(this));
    canv.addEventListener('mousemove', this.handleMouseDrag.bind(this));
  }

  drawInput() {
    if (this.started == true) {
      let cx = this.canv.getContext('2d'); 
      cx.strokeStyle = 'blue';

      let x1 = this.startX; let y1 = this.startY;
      let x2 = this.endX; let y2 = this.endY;
      cx.beginPath();
      cx.moveTo(x1, y1);
      cx.lineTo(x2, y2);
      cx.stroke();

      cx.strokeStyle = 'black';
    }
  }

  handleMouseUp(event: MouseEvent) {
    //if (event.shiftKey) {

    //} else {
    if (this.started == true) {
      this.started = false;
      let endX = event.offsetX;
      let endY = event.offsetY;
      let proj = new Projectile(
        Vec(this.startX - this.camX, this.startY - this.camY),
        Vec(endX - this.startX, endY - this.startY)
      );
      proj.mass = Number(document.querySelector<HTMLInputElement>('#mass').value);

      this.state.add(proj);
      this.startX = undefined;
      this.startY = undefined;
      this.endX = undefined;
      this.endY = undefined;
    } 
    this.shiftingCamera = false;
    this.camX += this.dCamX;
    this.camY += this.dCamY;
    this.dCamX = 0;
    this.dCamY = 0;
    
  }

  handleMouseDown(event: MouseEvent) {
    if (event.shiftKey) {
      this.shiftingCamera = true;
      this.startX = event.offsetX;
      this.startY = event.offsetY;
    } else {
      this.started = true;
      this.startX = event.offsetX;
      this.startY = event.offsetY;
    }
  }

  handleMouseDrag(event: MouseEvent) {
    if (event.shiftKey && this.shiftingCamera) {
      this.dCamX = event.offsetX - this.startX;
      this.dCamY = event.offsetY - this.startY;
    } else {
      if (this.started == true) {
        this.endX = event.offsetX;
        this.endY = event.offsetY;
      } 
    }
  }

  getCameraPosition() {
    return {x: this.camX + this.dCamX, y: this.camY + this.dCamY};
  }

}

