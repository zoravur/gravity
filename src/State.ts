import Projectile from './Projectile';
import Vec from './Vec';

export default class State {
  projectiles: Projectile[];
  constructor(projectiles: Projectile[]) {
    this.projectiles = projectiles;
  }

  update(elapsedTime: number) {
    let projs = JSON.parse(JSON.stringify(this.projectiles));
    this.projectiles.forEach((proj, index) => {
      proj.integrate(elapsedTime, projs);
    });
    this.computeCollisions();
    return new State(this.projectiles);
  }

  draw(cx: CanvasRenderingContext2D, cameraPosition: { x: number; y: number; }) {
    this.projectiles.forEach(proj => {
      proj.draw(cx, cameraPosition);
    });
  }

  add(proj: Projectile) {
    this.projectiles.push(proj);
  }

  addProjectile(x1: number, y1: number, deltaX: number, deltaY: number) {
    this.projectiles
      .push(
        new Projectile(
          Vec(x1, y1),
          Vec(deltaX, deltaY)
        )
      );
  }

  computeCollisions() {
    let newProjectiles: any[] = [];
    let visited = new Set();
    this.projectiles.forEach((cur, index) => {
      //See if this particle has already been processed
      if (!visited.has(index)) {

        //Attempt to find a second particle to collide with
        let idx = this.projectiles.findIndex(target => 
          (cur.position.minus(target.position)
            .toPolar()
            .magnitude < 5
            &&
            cur != target
          )
        ); 
        let target = this.projectiles[idx];

        //Merge both particles, or simply add the first 
        //if no second is found
        if (idx == -1) {
          newProjectiles.push(cur);
        } else {
          newProjectiles.push(
            Projectile.computeCollision(cur, target)
            /*
            new Projectile(
              cur.position, 
              Vec(0,0),
              +target.mass + +cur.mass
            )
            */
          );
          visited.add(idx);
        }

        visited.add(index);
      }
    });

    // fuck javascript
    this.projectiles.length = 0;
    this.projectiles.push(...newProjectiles);
  }

  //Future: Add logic for collisions and other projectile types
}
