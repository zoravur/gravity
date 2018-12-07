/*jshint globalstrict:false */
'use strict';

import Projectile from './Projectile';
import Vec from './Vec';
import { addButtons } from './ui';
import Input from './Input';
import PathHistory from './Paths';
import optionsAuto, { Options } from './Options';
import { render } from './View';
import * as PIXI from 'pixi.js';

import 'normalize.css';
import * as Stats from 'stats-js';

const pixiApp = new PIXI.Application({width: 1000, height: 700});
let fg: HTMLCanvasElement = document.querySelector('#fg') || pixiApp.view;
fg.id = "fg";
fg.style.zIndex = '1';
fg.style.position = 'absolute';
//Object.assign(fg.style, {border: "1px solid rgb(0, 0, 0)", position: "absolute; z-index: 1"});
//let fg: HTMLCanvasElement = document.querySelector('#fg');
let bg: HTMLCanvasElement = document.querySelector('#bg');

document.querySelector('#graphics').insertBefore(fg,bg);



let input: Input;
let stats: Stats;
let options;
let pathHistory;


addButtons();
function init() {
  console.log('init');
  let worker = new Worker('worker.js');
  input = new Input(fg, proj => {
    worker.postMessage({
      type: 'new-projectile',
      projectile: proj
    })
  });

  // TODO: Change options to an Object: (i.e. new Options(...)  )
  options = Options((newOptions) => {
    worker.postMessage({
      type: 'set-engine-rules',
      rules: newOptions, //NOTE: CURRENTLY SENDING ENTIRE OPTIONS OBJECT

    });
  });

  let bgx = bg.getContext('2d');
  bgx.fillStyle = 'black';
  bgx.fillRect(0, 0, bg.width, bg.height);

  pathHistory = new PathHistory();
  function handleSimulationStep(e) {



    pathHistory.addStep(e.data.projectiles, options);
    stats.begin();
    requestAnimationFrame(() => {
      stats.end();
      
      render(fg, {
        projectiles: e.data.projectiles,
        inputLine: input.getInputLine(),
        history: pathHistory
      }, Object.assign({}, options, {
        transform: input.getTransform()
      }));
    });
  }

  worker.onmessage = e => {
    switch (e.data.type) {
      case 'simulation-step':
        handleSimulationStep(e);
        break;

      // case 'history':
      //   handleHistoryUpdate(e);
      //   break;

      default:
        throw Error('Unhandled message type');
        break;
    }


  };
}



(function () {
  stats = new Stats();
  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.body.appendChild(stats.domElement);
})();

init();

/*
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
*/