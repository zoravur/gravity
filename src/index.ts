/*jshint globalstrict:false */
'use strict';

import Projectile from './Projectile';
import Vec from './Vec';
import { addButtons } from './ui';
import State from './State';
import Input from './Input';

let state: State;
let canvas: HTMLCanvasElement = document.querySelector('#canvas');
let input: Input;

addButtons();

function animate() {
  state = new State([]);
  input = new Input(canvas, state, document.querySelector('#mass'));
  let cx = canvas.getContext('2d');

  function draw(_timestamp?: number) {
    canvas.height = canvas.height;
    cx.save();

    input.setTransform();

    let {x,y} = input.getTransform();
    cx.fillRect(-x, -y, canvas.width, canvas.height);
    let elapsedTime = 1/60;

    //Draw blue input line
    input.drawInput();
    
    //Updating state more granularly allows for better physics.
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state = state.update(elapsedTime / 4);
    state.draw(cx, Vec());
    
    cx.restore();

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
  
}

animate();
