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
    //console.log('animating...');
    if (!start) start = timestamp;
    //let t = (timestamp - start) / 1000;

    let elapsedTime = (timestamp - prevTime) / 1000;

    projectiles.forEach(proj => {
      proj.updatePosition(elapsedTime);
      proj.draw(cx);
    });
    
    prevTime = timestamp; //store time for next frame;
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

function handleMouseDown(event) {
  let startX = event.x;
  let startY = event.y;

  function handleMouseUp(event) {
    //console.log("Mouse down:", startX, startY)
    //console.log("Mouse up:", event.x, event.y);
    let endX = event.x;
    let endY = event.y;

    console.log('Args: ', startX, startY, endX, endY);

    function computeProjectile (x1, y1, x2, y2) {
      let startVec = new Vec(x1, y1);
      //console.log('startVec', startVec);
      let endVec = new Vec(x2, y2);
      let deltaVec = Vec.minus(endVec, startVec);
      console.log('endVec', endVec);
      console.log('deltaVec', deltaVec);

      let proj = new Projectile(startVec, deltaVec);
      console.log('proj', proj);
      return proj;
      
    }

    let newProj = computeProjectile(startX, startY, endX, endY);
    console.log('newProj', newProj);
    projectiles.push(newProj);
    canvas.removeEventListener('mouseup', handleMouseUp);
  }

  canvas.addEventListener('mouseup', handleMouseUp);
}

animate();

canvas.addEventListener('mousedown', handleMouseDown);

