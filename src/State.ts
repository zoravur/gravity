import Projectile from './Projectile';
import Vec, { Vector } from './Vec';
import options from './Options';
export interface ProjectilePath {
  id: number;
  mass: number;
  path: Vector[];
}
export default class State {
  projectiles: Projectile[];
  history: ProjectilePath[];
  constructor(projectiles: Projectile[]) {
    this.projectiles = projectiles;
    this.history = [];
  }

  _savePath() {
    if (options.paths) {
      this.projectiles.forEach(proj => {
        let idx = this.history.findIndex(path => proj.id === path.id);
        if (idx === -1) {
          this.history.push({id: proj.id, mass: proj.mass, path: [proj.position]});
        } else this.history[idx].path.push(proj.position);
      })
    } else {
      this.history = [];
    }
  }

  update(elapsedTime: number) {
    let arr = JSON.parse(JSON.stringify(this.projectiles)); //XXX

    if (options.integration !== 'RK4') {
      let integration = {
        'verlet': Projectile.prototype.verletIntegrate,
        'implicit-euler': Projectile.prototype.implicitEulerIntegrate,
        'euler': Projectile.prototype.eulerIntegrate,
        'midpoint': Projectile.prototype.midpointIntegrate,
        'fourth-order': Projectile.prototype.fourthOrderIntegrate
      }
  
      this.projectiles = this.projectiles.map(
        (proj, _, /* arr */) => integration[options.integration].call(proj, elapsedTime, arr)
      );
    } else {
      this.projectiles = Projectile.RK4Integrate(elapsedTime, this.projectiles);
    }


    this._computeCollisions();
    this._savePath();
    return this;
  }

  draw(cx: CanvasRenderingContext2D) {
    this.projectiles.forEach(proj => {
      proj.draw(cx);
    });
    return this;
  }

  add(proj: Projectile) {
    this.projectiles.splice(1, 0, proj);
    return this;
  }

  addProjectile(x1: number, y1: number, deltaX: number, deltaY: number) {
    this.projectiles
      .push(
        new Projectile(
          Vec(x1, y1),
          Vec(deltaX, deltaY)
        )
      );
    return this;
  }

  _computeCollisions() {


    return this.projectiles = this.projectiles.reduce((projs: Projectile[], cur: Projectile) => {
      let idx = projs.findIndex(other => 
        cur.position.minus(other.position).magnitude < (cur.computeRadius() + other.computeRadius()) / 2);
      if (idx === -1) {
        projs.push(cur);
        return projs;
      }
      projs[idx] = Projectile.computeCollision(projs[idx], cur);
      return projs;
    }, []);
  }

}
