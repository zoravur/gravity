'use strict';
import Projectile from './Projectile.js';
import Vec from './Vec.js';
import { addButtons } from './ui.js';
import State from './State.js';
import Input from './Input.js';

let state;
let canvas = document.getElementById('canvas');
let input;

function animate() {
  state = new State([]);
  input = new Input(canvas, state);
  let cameraShift = new Vec(0, 0);
  let cx = canvas.getContext('2d');
  let start;
  let prevTime;

  function draw(timestamp) {
    cx.fillRect(0, 0, canvas.width, canvas.height);
    let elapsedTime = 1/60;

    //Draw blue input line
    input.drawInput();
    
    //Updating state more granularly allows for better physics.
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state.draw(cx, input.getCameraPosition());

    //Set up next frame
    prevTime = timestamp; //store time for next frame
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
  
}

addButtons();
animate();
