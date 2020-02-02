import Projectile from "./worker/Projectile";
import Subject from "./Subject";
import {createMessage, Message, MessageType} from "./worker/Message";

// wrapper for the physics simulation web worker
class Simulator extends Subject<Array<Projectile>> {
    worker: Worker;
    paused: boolean;

    constructor() {
        super();
        this.worker = new Worker('worker.js');
        this.worker.onmessage = this.onMessage.bind(this);
        this.play();
    }

    onMessage({ data } :  {data: Message}) {
        if (data.type == MessageType.PHYSICS_STEP) {
            this.emit(data.payload as Array<Projectile>);
        }
    }

    play() {
        this.worker.postMessage(createMessage(MessageType.PLAY));
        this.paused = false;
    }

    pause() {
        this.worker.postMessage(createMessage(MessageType.PAUSE));
        this.paused = true;
    }

    // TODO: Implement function that passes entire state to engine
    /*
    updateData() {
        this.worker.postMessage(createMessage(

        ))
    }
     */

    addProjectile(projectile: Projectile) {
        this.worker.postMessage(createMessage(
            MessageType.NEW_PROJECTILE,
            projectile
            )
        );
    }

    // TODO: Add speed control
    /*
    setSpeed(speed: number) {

    }
     */

}

export default Simulator;