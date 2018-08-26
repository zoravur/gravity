/*jshint globalstrict:false */
'use strict';

import Projectile from './Projectile';
import Vec from './Vec';
import { addButtons } from './ui';
import State from './State';
import Input from './Input';
import options from './Options';
import FrameCount from './FrameCounter';
import { render } from './View';
import 'normalize.css';


let state: State;
let fg: HTMLCanvasElement = document.querySelector('#fg');
let bg: HTMLCanvasElement = document.querySelector('#bg');
FrameCount(bg);
let input: Input;

addButtons();

function animate() {
  state = new State([]);
  input = new Input(fg, state, options);
  let fgx = fg.getContext('2d');
  let bgx = bg.getContext('2d');
  let previous = performance.now();

  //fgx.clearRect(0,0,fg.width, fg.height);
  bgx.fillStyle = 'black';
  bgx.fillRect(0, 0, bg.width, bg.height);

  function loop(_timestamp?: number) {
    fg.height = fg.height;
    fgx.save();

    input.setTransform();

    let elapsedTime = Math.min((_timestamp - previous)/1000, 2/60); //elapsed time in seconds
    previous = _timestamp;

    //Draw blue input line
    input.drawInput();
    
    //Updating state more granularly allows for better physics.
    if (!options.pause) {
      state.update(elapsedTime/4).update(elapsedTime/4).update(elapsedTime/4).update(elapsedTime/4);
      
    }
    
    
    render(fg, state);
    
    fgx.restore();

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  
}

addEventListener('dblclick', () => console.log(state));
animate();
