import Projectile from './Projectile.js';
import Vec from './Vec.js';

export default class State {
  constructor(projectiles) {
    this.projectiles = projectiles;
  }

  update(elapsedTime) {
    this.projectiles.forEach(proj => {
      proj.updateAcceleration(this.projectiles);
    });
    this.projectiles.forEach(proj => {
      proj.updatePosition(elapsedTime);
    });
    this.computeCollisions();
    return new State(this.projectiles);
  }

  draw(cx, cameraPosition) {
    this.projectiles.forEach(proj => {
      proj.draw(cx, cameraPosition);
    });
  }

  add(proj) {
    this.projectiles.push(proj);
  }

  addProjectile(x1, y1, deltaX, deltaY) {
    this.projectiles
      .push(
        new Projectile(
          new Vec(x1, y1),
          new Vec(deltaX, deltaY)
        )
      );
  }

  computeCollisions() {
    let newProjectiles = [];
    let visited = new Set();
    this.projectiles.forEach((cur, index) => {
      //See if this particle has already been processed
      if (!visited.has(index)) {

        //Attempt to find a second particle to collide with
        let idx = this.projectiles.findIndex(target => 
          (Vec.minus(cur.position, target.position)
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
              new Vec(0,0),
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
