import Vec from './Vec.js';

const bigG = -10000;

class Projectile {
  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = new Vec(0,0);
    this.mass = 100;
  }

  updateAcceleration (projectiles) {
    let totalForce = new Vec(0,0);
    projectiles.forEach(proj => {
      if (proj != this) {
        let {magnitude, angle} = 
          Vec.minus(this.position, proj.position).toPolar();
        let forceMag = bigG*proj.mass*this.mass/(magnitude*magnitude);
        let force = Vec.fromPolar(forceMag, angle);
        console.log(force);
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
    cx.fillRect(this.position.x - 5, this.position.y - 5, 10, 10);
    cx.beginPath();
    cx.moveTo(this.position.x, this.position.y);
    let endPoint = Vec.plus(this.position, this.velocity);
    cx.lineTo(endPoint.x, endPoint.y);
    cx.stroke();
  }
}

//Projectile.prototype.acceleration = new Vec(0,150);

export default Projectile;
