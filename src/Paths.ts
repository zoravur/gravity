import { Vector } from './lib/Vec';
import Projectile from './worker/Projectile';
import * as _ from 'lodash';

class Paths {
    //currentSize : number;
    maxSize : number;
    map : Map<string, Array<Vector>>;

    constructor() {
        this.maxSize = 1000;
        this.map = new Map();
    }

    get desiredLength() {
        return Math.floor(this.maxSize / this.map.size);
    }

    addStep(projectiles: Projectile[]) {
        let map = this.map;
        projectiles.forEach(proj => {
            if (map.has(proj.id)) {
                let path = map.get(proj.id);
                path.unshift(proj.position);
                //++this.currentSize;
                if (path.length > this.desiredLength) {
                    //this.currentSize -= path.length - this.desiredLength;
                    path.length = this.desiredLength;
                }
            } else {
                map.set(proj.id, [_.clone(proj.position)] );
                //++this.currentSize;
            }
        });
    }

    getFullHistory(): Map<string, Array<Vector>> {
        return this.map;
    }
}

export default Paths;
