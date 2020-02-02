'use strict';

import OptionsManager from './OptionsManager';
import Input, {InputEvent} from './Input';
import Renderer, {ItemsToRender, RenderingRules} from './View';
import fitToContainer from './lib/fitToContainer';
import Store from './Store';

// import 'normalize.css';
import * as Stats from 'stats-js';
import Vec, {Vector} from "./lib/Vec";
import ProjectileFactory from "./ProjectileFactory";
import Projectile from "./worker/Projectile";
import Simulator from "./Simulator";

let fg: HTMLCanvasElement = document.querySelector('#fg')
let bg: HTMLCanvasElement = document.querySelector('#bg');

document.querySelector('#graphics').insertBefore(fg,bg);

let stats: Stats;

function setup() {
  fitToContainer(fg)
  fitToContainer(bg)

  let bgx = bg.getContext('2d');
  bgx.fillStyle = 'black';
  bgx.fillRect(0, 0, bg.width, bg.height);
}

function init() {
  // set up backwards: output, state, input
  setup();
  let renderer = new Renderer(fg, bg);

  // TODO: Use filtering to set up functionalities like workflows

  // Stores --> View
    //TODO: Remove paths (history) tracker
  //let paths = new Paths();

  let itemsToRenderStore = new Store<ItemsToRender>({ projectiles: [] })
  itemsToRenderStore.subscribe(items => {
    renderer.render(items);
  });

  let renderingRulesStore = new Store<RenderingRules>({
    velocityVectors: false,
    forceVectors: false,
    paths: false,
    cameraOrigin: Vec(0, 0)
  });
  renderingRulesStore.subscribe(rules => {
    renderer.setRules(rules);
    renderer.render(itemsToRenderStore.state);
  })

  let projectileStore = new Store<Array<Projectile>>([]);
  projectileStore.subscribe(data => {
    //paths.addStep(data);
    itemsToRenderStore.state.projectiles = data;
    //itemsToRenderStore.state.pathHistory = paths.getFullHistory();
    itemsToRenderStore.propagate()
  })

  // Controllers --> Middleware --> Stores
  let projectileFactory = new ProjectileFactory(50);
  let simulator = new Simulator();
  simulator.subscribe(data => {
    projectileStore.state = data;
    projectileStore.propagate();
  })

  let optionsManager = new OptionsManager();
  optionsManager.registerHandlers();
  optionsManager.subscribe((options) => {
    Object.assign(renderingRulesStore.state, options.display);
    renderingRulesStore.propagate();
    projectileFactory.setMass(options.particles.mass);
    if (!options.display.paths) renderer.clearBackground();
    if (options.playback.pause) simulator.pause();
    else simulator.play();
  });

  let input = new Input(fg);
  input.subscribe((data: InputEvent) => {
    if (data.inputArrow) {
      itemsToRenderStore.state.inputArrow = data.inputArrow;
      itemsToRenderStore.propagate();
    }
    if (data.cameraUpdate) {
      renderer.clearBackground();
      renderingRulesStore.state.cameraOrigin = data.cameraUpdate;
      renderingRulesStore.propagate();
    }
    if (data.newProjectileArrow) {
      let newProjectile = projectileFactory.create(data.newProjectileArrow);
      simulator.addProjectile(newProjectile);
      projectileStore.state.push(newProjectile);
      projectileStore.propagate();
      itemsToRenderStore.state.inputArrow = null;
      itemsToRenderStore.propagate();
    }
  })

}

/*
function initOld() {
  let worker = new Worker('worker.js');
  input = new Input(fg);



  options = Options((newOptions) => {
    worker.postMessage({
      type: 'set-engine-rules',
      rules: newOptions, //NOTE: CURRENTLY SENDING ENTIRE OPTIONS OBJECT
    });
  });

  let bgx = bg.getContext('2d');
  bgx.fillStyle = 'black';
  bgx.fillRect(0, 0, bg.width, bg.height);

  //pathHistory = new Paths();

  function handleSimulationStep(e) {
    //pathHistory.addStep(e.data.projectiles, options);
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

      default:
        throw Error('Unhandled message type');
        break;
    }
  };
}
 */

// (function () {
//   stats = new Stats();
//   stats.setMode(0);
//
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//
//   document.body.appendChild(stats.domElement);
// })();

init();
