// This class requires a canvas and a state of projectiles as references.
// It sets up event handlers. Currently it can't add non 100 mass particles.

import Projectile from './Projectile.js';
import Vec from './Vec.js';

export default class Input {
  constructor(canv, state) {
    console.log('construct');
    this.clickAndDrag = {};
    this.started = false;
    this.ended = false;
    this.state = state;
    this.canv = canv;
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

  handleMouseUp(event) {
    if (this.started == true) {
      this.started = false;
      let endX = event.offsetX;
      let endY = event.offsetY;
      let proj = new Projectile(
        new Vec(this.startX, this.startY),
        new Vec(endX - this.startX, endY - this.startY)
      );
      proj.mass = document.getElementById('mass').value;

      this.state.add(proj);
      this.startX = undefined;
      this.startY = undefined;
      this.endX = undefined;
      this.endY = undefined;
    } 
  }

  handleMouseDown(event) {
    this.started = true;
    this.startX = event.offsetX;
    this.startY = event.offsetY;
  }

  handleMouseDrag(event) {
    if (this.started == true) {
      this.endX = event.offsetX;
      this.endY = event.offsetY;
    } 
  }

}

