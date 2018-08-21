/*jshint globalstrict:false */
'use strict';

import Projectile from './Projectile';
import Vec from './Vec';
import { addButtons } from './ui';
import State from './State';
import Input from './Input';
//import FrameCount from './FrameCounter';
import { render } from './View';
import 'normalize.css';


let state: State;
let canvas: HTMLCanvasElement = document.querySelector('#canvas');
//FrameCount(canvas);
let input: Input;

addButtons();

function animate() {
  state = new State([]);
  input = new Input(canvas, state, document.querySelector('#mass'));
  let cx = canvas.getContext('2d');
  let previous = performance.now();

  function loop(_timestamp?: number) {
    canvas.height = canvas.height;
    cx.save();

    input.setTransform();

    let {x,y} = input.getTransform();
    cx.fillRect(-x, -y, canvas.width, canvas.height);
    let elapsedTime = (_timestamp - previous)/1000; //elapsed time in seconds
    previous = _timestamp;

    //Draw blue input line
    input.drawInput();
    
    //Updating state more granularly allows for better physics.
    state.update(elapsedTime);
    
    
    render(canvas, state);
    
    cx.restore();

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  
}

addEventListener('dblclick', () => console.log(state));
animate();
