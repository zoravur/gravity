'use strict';
import Projectile from './Projectile.js';
import Vec from './Vec.js';

let projectiles = [];
let clickAndDrag = {};

let canvas = document.getElementById('canvas');
let cx = canvas.getContext('2d');

function addButtons () {
  let massControl = document.getElementById('mass-control');

  function button(val) {
    let button = document.createElement('button');
    button.textContent = val;
    massControl.appendChild(button);
    button.addEventListener('click', () => {
      document.getElementById('mass').value = val;
    });
  }
  button(10);
  button(50);
  button(100);
  button(200);
  button(500);
  button(750);
  button(1000);
}

function animate() {
  let start;
  let prevTime;

  function draw(timestamp) {
    cx.fillRect(0, 0, canvas.width, canvas.height);
    if (!start) start = timestamp;

    let elapsedTime = (timestamp - prevTime) / 1000;

    if (JSON.stringify(clickAndDrag) != JSON.stringify({})) {
      cx.strokeStyle = 'blue';

      cx.beginPath();
      cx.moveTo(clickAndDrag.sX, clickAndDrag.sY);
      cx.lineTo(clickAndDrag.cX, clickAndDrag.cY);
      cx.stroke();

      cx.strokeStyle = 'black';
    }

    projectiles.forEach(proj => {
      proj.updateAcceleration(projectiles);
    });

    projectiles.forEach(proj => {
      proj.draw(cx);
      proj.updatePosition(elapsedTime);
    });
    
    prevTime = timestamp; //store time for next frame;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

function handleMouseDown(event) {
  let startX = event.offsetX;
  let startY = event.offsetY;
  clickAndDrag.sX = startX;
  clickAndDrag.sY = startY;


  function handleMouseDrag(event) {
    clickAndDrag.cX = event.offsetX;
    clickAndDrag.cY = event.offsetY;
  }
  canvas.addEventListener('mousemove', handleMouseDrag);


  function handleMouseUp(event) {
    let endX = event.offsetX;
    let endY = event.offsetY;

    let newProj = computeProjectile(startX, startY, endX, endY);
    newProj.mass = document.getElementById('mass').value;
    projectiles.push(newProj);

    clickAndDrag = {};
    canvas.removeEventListener('mouseup', handleMouseUp);
    canvas.removeEventListener('mousemove', handleMouseDrag);
  }
  canvas.addEventListener('mouseup', handleMouseUp);

}
canvas.addEventListener('mousedown', handleMouseDown);

addButtons();
animate();

function computeProjectile (x1, y1, x2, y2) {

  let startVec = new Vec(x1, y1);
  let endVec = new Vec(x2, y2);
  let deltaVec = Vec.minus(endVec, startVec);
  let proj = new Projectile(startVec, deltaVec);

  //console.log('startVec', startVec);
  //console.log('endVec', endVec);
  //console.log('proj', proj);

  return proj;
}
