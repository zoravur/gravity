import Physics from './Physics'
import Projectile from './Projectile';
import Vec from '../lib/Vec'
import {createMessage, Message, MessageType} from "./Message";

let physics = new Physics();
let play = false;

function parseAsProjectile({position, velocity, mass}: any) : Projectile {
    let projectile = new Projectile(Vec(), Vec(), 0);
    Object.assign(projectile.position, position);
    Object.assign(projectile.velocity, velocity);
    projectile.mass = mass;
    return projectile;
}

onmessage = (e: MessageEvent) => {
    let data = e.data as Message;

    switch (data.type) {
        case MessageType.PLAY:
            if (!play) {
                play = true;
                loop();
            }
            break;

        case MessageType.PAUSE:
            console.log('pause');
            play = false;
            break;

        case MessageType.NEW_PROJECTILE:
            handleNewProjectile(parseAsProjectile(data.payload));
            break;

        case MessageType.SET_ENGINE_RULES:
            if (!e.data.rules) throw Error('No such rules');
            physics.setRules(e.data.rules);
            break;
    
        default:
            throw Error('Unhandled message to worker');
    }
};

function handleNewProjectile(projectile: Projectile) {
    physics.addProj(projectile);
}

function loop() {
    if (!play) return;
    let start = performance.now();
    let projectiles = physics.step(1/60);
    postMessage(createMessage(MessageType.PHYSICS_STEP, projectiles));
    setTimeout(loop, 1000/60 - (performance.now() - start));
}
