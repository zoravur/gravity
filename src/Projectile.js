import Vec from './Vec.js';
import interpolate from 'color-interpolate';

const bigG = -100;

class Projectile {
  constructor(position, velocity, mass) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = new Vec(0,0);
    this.mass = mass || 100;
  }

  computeColor () {
    //    let colormap = interpolate(['blue', 'red']);
    let colormap = x => `hsl(${260*x - 50},100%,50%)`;

    return colormap(Math.cbrt(this.mass/100)/2);
  }

  updateAcceleration (projectiles) {
    let totalForce = new Vec(0,0);
    projectiles.forEach(proj => {
      if (proj != this) {
        let {magnitude, angle} = 
          Vec.minus(this.position, proj.position).toPolar();
        let forceMag = bigG*proj.mass*this.mass/(magnitude);
        // NOTICE THE ABOVE LINE... magnitude(distance) isn't squared.
        // It's because the simulation is 2 dimensional.
        let force = Vec.fromPolar(forceMag, angle);
        totalForce = Vec.plus(totalForce, force);
      }
    });
    this.acceleration = Vec.times(totalForce, 1 / this.mass);
    return this.acceleration;
  }

  updateVelocity (elapsedTime) {
    let dV = Vec.times(this.acceleration, elapsedTime);
    this.velocity = Vec.plus(this.velocity, dV);
    return this.velocity;
  }

  updatePosition(elapsedTime) {
    let v1 = this.velocity;
    let v2 = this.updateVelocity(elapsedTime);
    let vAvg = Vec.times(Vec.plus(v1, v2), 0.5);

    let d = Vec.times(vAvg, elapsedTime);
    this.position = Vec.plus(this.position, d);
    return this.position;
  }

  draw(cx) {
    let oldColor = cx.fillStyle = cx.strokeStyle;

    cx.fillStyle = cx.strokeStyle = this.computeColor();
    cx.fillRect(this.position.x - 5, this.position.y - 5, 10, 10);
    cx.beginPath();
    cx.moveTo(this.position.x, this.position.y);
    let endPoint = Vec.plus(this.position, this.velocity);
    cx.lineTo(endPoint.x, endPoint.y);
    cx.stroke();

    cx.strokeStyle = cx.fillStyle = oldColor;
  }
}

export default Projectile;
