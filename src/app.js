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
  let cx = canvas.getContext('2d');
  let start;
  let prevTime;

  function draw(timestamp) {
    cx.fillRect(0, 0, canvas.width, canvas.height);
    let elapsedTime = 1/60;

    //Updating state more granularly allows for better physics.
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state.draw(cx);

    //Draw blue input line
    input.drawInput();
    
    //Set up next frame
    prevTime = timestamp; //store time for next frame
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
  
}

addButtons();
animate();
