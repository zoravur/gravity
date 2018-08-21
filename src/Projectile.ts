import Vec from './Vec';
declare let require;
import interpolate = require('color-interpolate');

const bigG = -1;

class Projectile {
  mass: number;
  position: any;
  velocity: any;
  acceleration: any;
  id: number;
  constructor(position, velocity, mass?) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = Vec(0,0);
    this.mass = mass || 50;
    this.id = Math.random();
  }

  get momentum() : any {
    return this.velocity.times(this.mass);
  }

  computeColor () {
    let colormap = interpolate(['white', 'brown', 'orange', 'red']);
    return colormap(Math.log10(Math.max(this.mass, 1))/4);
  }

  updateAcceleration (projectiles: Projectile[]) {
    return this.acceleration = projectiles
      .filter(({ id }) => (id != this.id))
      .map(proj => ({
        displacement: this.position.minus(proj.position),
        mass: proj.mass
      }))
      .map(({displacement, mass}) => Vec(
        /* Gmm/r^2 */
        bigG*mass*this.mass/displacement.magnitude,
        displacement.angle,
        true // Is polar
      ))
      .reduce((total, cur) => total.plus(cur), Vec())
      .times(1/this.mass)
  }

  //The new and improved updateVelocity & updatePosition
  integrate(elapsedTime, projectiles) {
    let a_0 = this.acceleration.plus(Vec(0,0));

    // d = v1*t + 1/2at^2
    let delta = this.velocity.times(elapsedTime).plus(a_0.times(0.5*elapsedTime*elapsedTime));
    this.position = this.position.plus(delta);

    this.updateAcceleration(projectiles);
    let avgAcceleration = a_0.plus(this.acceleration).times(0.5);

    // a = (v2 - v1) / t => v2 = v1 + at
    this.velocity = this.velocity.plus(avgAcceleration.times(elapsedTime));

    //return new Projectile(this.position, this.velocity, this.mass);
    return this;
  }

  draw(cx: CanvasRenderingContext2D) {
    cx.save();
    //cx.translate(0.5, 0.5);


    cx.fillStyle = cx.strokeStyle = this.computeColor();
    cx.beginPath();
    cx.arc(this.position.x, this.position.y, (Math.log(Math.abs(this.mass))+2)/1.5, 0, 2*Math.PI);
    cx.fill();
    cx.beginPath();
    cx.moveTo(this.position.x, this.position.y);
    let endPoint = this.position.plus(this.velocity);
    cx.lineTo(endPoint.x, endPoint.y);
    cx.stroke();

    cx.restore();
  }

  static computeCollision(p1, p2) {
    let mass = +p1.mass + +p2.mass;
    let position = p1.position.plus(p2.position).times(0.5);
    let velocity = p1.momentum.plus(p2.momentum).times(1/mass);
    return new Projectile(position, velocity, mass);
  }
}

export default Projectile;
