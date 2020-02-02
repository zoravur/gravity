import Projectile from './Projectile';
import Vec, {Vector} from '../lib/Vec';


class Physics {
    projs: Projectile[];
    bigG: number;
    inverseDegree: number;
    _stop: boolean;
    rules: any;

    constructor(rules = {}) {
        this.bigG = 80;
        this.projs = [];
        this.rules = rules;
    }

    setRules(rules) {
        Object.assign(this.rules, rules);
    }

    addProj(proj: Projectile) {
        this.projs.push(proj);
    }

    calcForce(proj: Projectile, other: Projectile) :Vector {
        //Get force exerted on proj by other projectile.
        let displacement = other.position.minus(proj.position);
        let dist = displacement.magnitude;
        
        //Note: no mention of inversedegree here
        let force: Vector = displacement.normalize().times_(
            (this.rules.bigG || this.bigG)*proj.mass*other.mass / Math.pow(dist, this.rules.inverseDegree || 2));

        return force;
    }

    integrateSemiImplicitEuler(h) {
        this.projs.forEach((proj, _, arr) => {
            let totalForce = arr
                .filter(other => other.id !== proj.id)
                .map(other => this.calcForce(proj, other))
                .reduce((acc, cur) => acc.plus_(cur), Vec(0,0));
            proj.acceleration = totalForce.times(1/proj.mass);
        });
        this.projs.forEach(proj => { proj.velocity.plus_(proj.acceleration.times(h))});
        this.projs.forEach(proj => { proj.position.plus_(proj.velocity.times(h))});
    }

    step(h) {
        this.computeCollisions();
        this.integrateSemiImplicitEuler(h);
        return this.projs;
    }


    collide(p1, p2) {
        let mass = +p1.mass + +p2.mass;
        let position = p1.position.times(p1.mass).plus(p2.position.times(p2.mass)).times(1/mass);
        let velocity = p1.momentum.plus(p2.momentum).times(1/mass);
        return new Projectile(position, velocity, mass);
    }

    computeCollisions() {
        return this.projs = this.projs.reduce((projectiles: Projectile[], cur: Projectile) => {
            let idx = projectiles.findIndex(other => 
              cur.position.minus(other.position).magnitude < cur.radius + other.radius);
            if (idx === -1) {
              projectiles.push(cur);
              return projectiles;
            }
            projectiles[idx] = this.collide(projectiles[idx], cur);
            return projectiles;
          }, []);
    }

}
export default Physics;