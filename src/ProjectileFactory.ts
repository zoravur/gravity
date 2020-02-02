import Projectile from "./worker/Projectile";
import Arrow from "./Arrow";

class ProjectileFactory {
    mass: number;

    constructor(defaultMass) {
        this.mass = defaultMass;
    }

    setMass(mass: number) {
        this.mass = mass;
    }

    create({start, delta}: Arrow) : Projectile {
        return new Projectile(start, delta, this.mass);
    }
}

export default ProjectileFactory;