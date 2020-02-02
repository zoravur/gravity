class Vector{
  x: number;
  y: number;
  constructor(x?: number, y?: number, isPolar?: boolean) {
    if (!(this instanceof Vector)) {
      return new Vector(...arguments);
    }
    if (x === undefined) {
      this.x = 0;
      this.y = 0;
      return;
    }
    if (isPolar) {
      // x = magnitude, y = angle
      this.x = x * Math.cos(y);
      this.y = x * Math.sin(y);
      return;
    }
    this.x = x;
    this.y = y;
  }

  toPolar() {
    return {
      magnitude: Math.hypot(this.x, this.y),
      angle: Math.atan2(this.y, this.x)
    };
  }

  get magnitude() {
    return Math.hypot(this.x, this.y);
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }
  
  get degrees() {
    return this.angle / Math.PI * 180;
  }

  normalize() {
    return this.times(1/this.magnitude);
  }

  normalize_() {
    this.x /= this.magnitude;
    this.y /= this.magnitude;
    return this;
  }

  plus(v) {
    return new Vector(
      this.x + v.x,
      this.y + v.y
    );
  }

  
  plus_(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  minus(v) {
    return new Vector(
      this.x - v.x,
      this.y - v.y
    );
  }

  minus_(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  times(scalar) {
    return new Vector(
      this.x * scalar,
      this.y * scalar
    );
  }

  times_(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  rotateAround(a, point) {
    let {magnitude, angle} = this.minus(point).toPolar();
    angle += a;
    return (new Vector(magnitude, angle, true)).plus(point);
  }

  rotate(a) {
    if (Math.abs(a) > 2 * Math.PI) console.log('Check to see if your rotations are in radians');
    let {magnitude, angle} = this.toPolar();
    angle += a;
    return new Vector(magnitude, angle, true);
  }

  proj(v) {
    let vhat = v.normalize();
    return vhat.times(this.dot(vhat));
  }

  equals(other) {
    return this.x == other.x && this.y == other.y;
  }
}

let Vec = function(x?, y?, isPolar?): Vector { return new Vector(x, y, isPolar); };
export default Vec;

export { Vector };