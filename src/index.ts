/*jshint globalstrict:false */
'use strict';

import Projectile from './Projectile';
import Vec from './Vec';
import { addButtons } from './ui';
import State from './State';
import Input from './Input';
import options from './Options';
//import FrameCount from './FrameCounter';
import { render } from './View';

import 'normalize.css';
import * as Stats from 'stats-js';


let state: State;
let fg: HTMLCanvasElement = document.querySelector('#fg');
let bg: HTMLCanvasElement = document.querySelector('#bg');
//FrameCount(bg);
let input: Input;

let stats: Stats;
(function() {
  stats = new Stats();
  stats.setMode(0);
   
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
   
  document.body.appendChild( stats.domElement );
})();

addButtons();

function animate() {
  state = new State([]);
  input = new Input(fg, state, options);
  let fgx = fg.getContext('2d');
  let bgx = bg.getContext('2d');
  let previous = performance.now();

  bgx.fillStyle = 'black';
  bgx.fillRect(0, 0, bg.width, bg.height);

  function loop(_timestamp?: number) {
    stats.begin();

    fg.height = fg.height;
    fgx.save();

    input.setTransform();

    let elapsedTime = 1/60 || Math.min((_timestamp - previous)/1000, 2/60); //elapsed time in seconds
    previous = _timestamp;

    //Draw blue input line
    input.drawInput();
    
    //Updating state more granularly allows for better physics.
    if (!options.pause) {
      state.update(elapsedTime/4).update(elapsedTime/4).update(elapsedTime/4).update(elapsedTime/4);
      
    }
    
    render(fg, state);
    
    fgx.restore();

    stats.end();

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  
}

addEventListener('dblclick', () => console.log(state));
animate();
