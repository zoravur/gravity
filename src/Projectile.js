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

  //The new and improved updateVelocity & updatePosition
  integrate(elapsedTime, projectiles) {
    let prevAcceleration = Vec.plus(this.acceleration, new Vec(0,0));
    let delta = Vec.plus(
      Vec.times(this.velocity, elapsedTime),
      Vec.times(prevAcceleration, (0.5*elapsedTime*elapsedTime))
    );
    this.position = Vec.plus(this.position, delta);
    this.updateAcceleration(projectiles);
    let avgAcceleration = Vec.times(
      Vec.plus(prevAcceleration, this.acceleration),
      0.5
    );
    this.velocity = Vec.plus(
      Vec.times(avgAcceleration, elapsedTime),
      this.velocity
    );

  }

  draw(cx, C) {
    //C is for camera
    let oldColor = cx.fillStyle = cx.strokeStyle;

    cx.fillStyle = cx.strokeStyle = this.computeColor();
    cx.fillRect(
      this.position.x - 5 + C.x, 
      this.position.y - 5 + C.y, 
      10, 10
    );
    cx.beginPath();
    cx.moveTo(this.position.x + C.x, this.position.y + C.y);
    let endPoint = Vec.plus(this.position, this.velocity);
    cx.lineTo(endPoint.x + C.x, endPoint.y + C.y);
    cx.stroke();

    cx.strokeStyle = cx.fillStyle = oldColor;
  }

  static computeCollision(p1, p2) {
    let m1 = Vec.times(p1.velocity,p1.mass);
    let m2 = Vec.times(p2.velocity,p2.mass);
    let momentum = Vec.plus(m1, m2);
    let mass = +p1.mass + +p2.mass;
    let position = Vec.times(Vec.plus(p1.position, p2.position),0.5);
    let velocity = Vec.times(momentum, 1/mass);
    return new Projectile(position, velocity, mass);
  }
}

export default Projectile;
