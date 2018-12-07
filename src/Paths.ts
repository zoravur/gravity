import { Vector } from './Vec';
import Projectile from './Projectile';


type ProjectilePath = {position: Vector[], mass: number}
class PathHistory extends Map<number, ProjectilePath > {

    addStep(projectiles: Projectile[], options) {
        projectiles.forEach(proj => {
            if (this.has(proj.id)) {
                let path = this.get(proj.id).position;
                path.unshift(proj.position);
                path.length = Math.min(path.length, options.historyLength);
            } else {
                this.set(proj.id, {position: [proj.position], mass: proj.mass})
            }
        });
    }

    getFullHistory(): ProjectilePath[] {
        return Array.from(this.values());
    }



}

export default PathHistory;