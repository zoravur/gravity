import Projectile from './Projectile';
import Vec, { Vector } from './Vec';

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

    // this.history.push(this.projectiles.map(
    //   proj => ({
    //     position: proj.position, 
    //     mass: proj.mass
    //   })
    // ));

    this.projectiles.forEach(proj => {
      let idx = this.history.findIndex(path => proj.id === path.id);
      if (idx === -1) {
        this.history.push({id: proj.id, mass: proj.mass, path: [proj.position]});
      } else this.history[idx].path.push(proj.position);
    })

    //history should be an array of TRAJECTORIES, which show how a path changed over time.
    //For each of the current projectiles, see if they match a history, and if so, add them to the path.

  }

  update(elapsedTime: number) {

    this.projectiles = this.projectiles.map(
      (proj, _, arr) => proj.integrate(elapsedTime, arr)
    );
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
    this.projectiles.push(proj);
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
      let idx = projs.findIndex(other => cur.position.minus(other.position).magnitude < 5);
      if (idx === -1) {
        projs.push(cur);
        return projs;
      }
      projs[idx] = Projectile.computeCollision(projs[idx], cur);
      return projs;
    }, []);
  }

}
