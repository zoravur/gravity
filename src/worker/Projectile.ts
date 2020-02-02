import Vec, { Vector } from '../lib/Vec';
import { v4 as uuid } from 'uuid';

// import constants from '../Unused/Options'
// // declare let require;
// import * as interpolate from 'color-interpolate';
// import { arrow } from '../View';

class Projectile {
  mass: number;
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  id: string;
  _radius: number;
  constructor(position, velocity, mass?) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = Vec(0,0);
    this.mass = mass || 50;
    this.id = uuid();
  }

  get momentum() : Vector {
    return this.velocity.times(this.mass);
  }

  set momentum(vec: Vector) {
    this.velocity = vec.times(1/this.mass)
  }

  /*
  computeColor () {
    let colormap = interpolate(['white', 'brown', 'orange', 'red']);
    return colormap(Math.log10(Math.max(this.mass, 1))/4);
  }
  */

  /*
  updateAcceleration (projectiles: Projectile[]) {
    return this.acceleration = projectiles
      .filter(({ id }) => (id != this.id))
      .map(proj => ({
        displacement: this.position.minus(proj.position),
        mass: proj.mass
      }))
      .map(({displacement, mass}) => Vec(
        // Gmm/r^2 
        constants.bigG*mass/(Math.pow(displacement.magnitude, constants.inverseDegree)),
        displacement.angle,
        true // Is polar
      ))
      .reduce((total, cur) => total.plus(cur), Vec())
      //.times(1/this.mass)
  }
  */

  /*
  getForce(projectiles) {
    return projectiles
    .filter(({ id }) => (id != this.id))
    .map(proj => ({
      displacement: this.position.minus(proj.position),
      mass: proj.mass
    }))
    .map(({displacement, mass}) => Vec(
      // Gmm/r^2 
      constants.bigG*mass*this.mass/(Math.pow(displacement.magnitude, constants.inverseDegree)),
      displacement.angle,
      true // Is polar
    ))
    .reduce((total, cur) => total.plus(cur), Vec())
  }
  */

  //The new and improved updateVelocity & updatePosition
  
  // verletIntegrate(elapsedTime, projectiles) {
  //   let a_0 = this.acceleration.plus(Vec(0,0));

  //   // d = v1*t + 1/2at^2
  //   let delta = this.velocity.times(elapsedTime).plus(a_0.times(0.5*elapsedTime*elapsedTime));
  //   this.position = this.position.plus(delta);

  //   this.updateAcceleration(projectiles);
  //   let avgAcceleration = a_0.plus(this.acceleration).times(0.5);

  //   // a = (v2 - v1) / t => v2 = v1 + at
  //   this.velocity = this.velocity.plus(avgAcceleration.times(elapsedTime));

  //   return this;
  // }

  // implicitEulerIntegrate(h, projectiles) {
  //   this.updateAcceleration(projectiles);
  //   this.velocity = this.velocity.plus(this.acceleration.times(h));
  //   this.position = this.position.plus(this.velocity.times(h));
  //   return this;
  // }

  // eulerIntegrate(h, projectiles) {
  //   this.updateAcceleration(projectiles);
  //   this.position = this.position.plus(this.velocity.times(h));
  //   this.velocity = this.velocity.plus(this.acceleration.times(h));
  //   return this;
  // }

  // midpointIntegrate(h, projectiles) {
  //   this.position = this.position.plus(this.velocity.times(h/2));
  //   this.velocity = this.velocity.plus(this.updateAcceleration(projectiles).times(h));
  //   this.position = this.position.plus(this.velocity.times(h/2));
  //   return this;
  // }

  // fourthOrderIntegrate(h, projectiles) {
  //   // n = 2^(1/3)
  //   const n = 1.2599210498948732;
  //   const w_0 = 1/(2-n);
  //   const w_1 = -n/(2-n);
  //   this.midpointIntegrate(w_0*h, projectiles);
  //   this.midpointIntegrate(w_1*h, projectiles);
  //   this.midpointIntegrate(w_0*h, projectiles);
  //   return this;
  // }

  // //static momentumIntegrate()


  // static RK4Integrate(h: number, projectiles: Projectile[]) {

  //   let v1 = projectiles.map(proj => proj.velocity);
  //   let p1 = projectiles.map(proj => proj.position);
  //   let a1 = projectiles.map(proj => proj.updateAcceleration(projectiles));

  //   let v2 = v1.map((vel, i) => vel.plus(a1[i].times(h/2)));
  //   let p2 = p1.map((pos, i) => pos.plus(v1[i].times(h/2)));
  //   projectiles.forEach((proj, i) => {proj.position = p2[i]});
  //   let a2 = projectiles.map(proj => proj.updateAcceleration(projectiles));

  //   let v3 = v2.map((vel, i) => vel.plus(a2[i].times(h/2)));
  //   let p3 = p2.map((pos, i) => pos.plus(v2[i].times(h/2)));
  //   projectiles.forEach((proj, i) => {proj.position = p3[i]});
  //   let a3 = projectiles.map(proj => proj.updateAcceleration(projectiles));

  //   let v4 = v3.map((vel, i) => vel.plus(a3[i].times(h)));
  //   let p4 = p3.map((pos, i) => pos.plus(v3[i].times(h)));
  //   projectiles.forEach((proj, i) => {proj.position = p4[i]});
  //   let a4 = projectiles.map(proj => proj.updateAcceleration(projectiles));

  //   projectiles.forEach((proj, i) => {
  //     proj.acceleration = a1[i].plus(a2[i].times(2)).plus(a3[i].times(2)).plus(a4[i]).times(1/6);
  //     proj.velocity = v1[i].plus(v2[i].times(2)).plus(v3[i].times(2)).plus(v4[i]).times(1/6);
  //     proj.position = proj.position.plus(proj.velocity.times(h));
  //     proj.velocity = proj.velocity.plus(proj.acceleration.times(h));
  //   });


  //   return projectiles;

  // }

  computeRadius() {
    return (Math.log(Math.abs(this.mass))+2)/1.5;
  }

  get radius() {
    return this._radius || (this._radius = this.computeRadius());
  }

  
  /*
  static computeCollision(p1, p2) {
    let mass = +p1.mass + +p2.mass;
    let position = p1.position.times(p1.mass).plus(p2.position.times(p2.mass)).times(1/mass);
    let velocity = p1.momentum.plus(p2.momentum).times(1/mass);
    return new Projectile(position, velocity, mass);
  }
  */
}

export default Projectile;

/*
draw(cx: CanvasRenderingContext2D) {
  cx.save();
  //cx.translate(0.5, 0.5);



  cx.fillStyle = cx.strokeStyle = this.computeColor();
  cx.beginPath();
  cx.arc(this.position.x, this.position.y, this.computeRadius(), 0, 2*Math.PI);
  cx.fill();

  if (constants.velocityArrow)
    arrow(cx, this.position, this.position.plus(this.velocity));
  if (constants.accelerationArrow)
    arrow(cx, this.position, this.position.plus(this.acceleration));
  cx.restore();
}
*/