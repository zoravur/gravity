'use strict';
import Projectile from './Projectile.js';
import Vec from './Vec.js';

let projectiles = [];

let canvas = document.getElementById('canvas');
let cx = canvas.getContext('2d');


function animate() {
  let start;
  let prevTime;

  function draw(timestamp) {
    cx.clearRect(0, 0, canvas.width, canvas.height);
    if (!start) start = timestamp;

    let elapsedTime = (timestamp - prevTime) / 1000;

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

  function handleMouseUp(event) {
    let endX = event.offsetX;
    let endY = event.offsetY;

    let newProj = computeProjectile(startX, startY, endX, endY);
    console.log('newProj', newProj);
    canvas.removeEventListener('mouseup', handleMouseUp);
    projectiles.push(newProj);
    console.log(projectiles);
  }

  canvas.addEventListener('mouseup', handleMouseUp);
}

canvas.addEventListener('mousedown', handleMouseDown);

animate();

function computeProjectile (x1, y1, x2, y2) {
  console.log('In computeProjectile:');
  console.log(arguments);

  let startVec = new Vec(x1, y1);
  let endVec = new Vec(x2, y2);
  let deltaVec = Vec.minus(endVec, startVec);
  let proj = new Projectile(startVec, deltaVec);

  console.log('startVec', startVec);
  console.log('endVec', endVec);
  console.log('proj', proj);

  return proj;
}
