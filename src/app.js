'use strict';
import Projectile from './Projectile.js';
import Vec from './Vec.js';
import { addButtons } from './ui.js';

let projectiles;
let clickAndDrag;
let offScreenTime; 
//This is an ad-hoc way of pausing the animation, 
//and it should be changed
let canvas = document.getElementById('canvas');

function lineDrag(cx) {
  cx.strokeStyle = 'blue';

  cx.beginPath();
  cx.moveTo(clickAndDrag.sX, clickAndDrag.sY);
  cx.lineTo(clickAndDrag.cX, clickAndDrag.cY);
  cx.stroke();

  cx.strokeStyle = 'black';
}

function animate() {
  projectiles = [];
  clickAndDrag = {};
  offScreenTime = 0;
  let cx = canvas.getContext('2d');
  let start;
  let prevTime;

  function draw(timestamp) {
    cx.fillRect(0, 0, canvas.width, canvas.height);
    if (!start) start = timestamp;

    let elapsedTime = (timestamp - prevTime - offScreenTime) / 1000;
    if (offScreenTime != 0) offScreenTime = 0;

    if (JSON.stringify(clickAndDrag) != JSON.stringify({})) {
      lineDrag(cx);
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
  
  //DEBUG THIS TRASH
  let ID = requestAnimationFrame(draw);

  /*
  document.addEventListener('mousedown', function(event) {
    let startX = event.offsetX;
    let startY = event.offsetY;
    function handleTranslate (event) {
      if (event.ctrlKey) {
        let curX = event.offsetX;
        let curY = event.offsetY;
        //translate page
        cx.transform(0,0,0,0,curX-startX,curY-startY);
      }
    }

    if (event.ctrlKey) {
      cancelAnimationFrame(ID);

      document.addEventListener('mousemove', handleTranslate);

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleTranslate);
        ID = requestAnimationFrame(draw);
      });
    }
  });
  */

}

document.addEventListener('visibilitychange', function() {
  let state = document.visibilityState;
  if (state == 'hidden') {
    offScreenTime = Date.now();
    let handleOnScreen = function() {
      offScreenTime = Date.now() - offScreenTime;
      document.removeEventListener('visibilitychange', handleOnScreen);
    };
    document.addEventListener('visibilitychange', handleOnScreen);
  }
});

function handleMouseDown(event) {
  let startX = event.offsetX;
  let startY = event.offsetY;
  function handleMouseDrag(event) {
    clickAndDrag.cX = event.offsetX;
    clickAndDrag.cY = event.offsetY;
  }
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

  if (!event.ctrlKey) {
    clickAndDrag.sX = startX;
    clickAndDrag.sY = startY;

    canvas.addEventListener('mousemove', handleMouseDrag);

    canvas.addEventListener('mouseup', handleMouseUp);
  }

}
canvas.addEventListener('mousedown', handleMouseDown);

addButtons();
animate();

function computeProjectile (x1, y1, x2, y2) {

  let startVec = new Vec(x1, y1);
  let endVec = new Vec(x2, y2);
  let deltaVec = Vec.minus(endVec, startVec);
  let proj = new Projectile(startVec, deltaVec);

  return proj;
}
