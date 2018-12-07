import Physics from './Physics'
import Projectile from './Projectile';
//import PathHistory from './Paths';
import Vec from './Vec'

let physics = new Physics();
//let pathHistory = new PathHistory();

onmessage = (e: MessageEvent) => {
    let data = e.data;

    switch (data.type) {
        case 'new-projectile':
            handleNewProjectile(data);
            break;

        case 'set-engine-rules':
            if (!e.data.rules) throw Error('No such rules');
            physics.setRules(e.data.rules);
            break;
    
        default:
            throw Error('Unhandled message to worker');
            break;
    }
};

function handleNewProjectile(data) {
    physics.addProj(new Projectile(
        Vec(data.projectile.position.x, data.projectile.position.y), 
        Vec(data.projectile.velocity.x, data.projectile.velocity.y), 
        data.projectile.mass
    ));
}

function loop() {
    let start = performance.now();
    let projectiles = physics.step(1/60);
    //pathHistory.addStep(projectiles);
    postMessage({type: 'simulation-step', projectiles: projectiles});
    setTimeout(loop, 1000/60 - (performance.now() - start));
}
loop();