import Projectile from "./Projectile";

enum MessageType {
    PLAY,
    PAUSE,
    NEW_PROJECTILE,
    SET_ENGINE_RULES,
    PHYSICS_STEP
}

interface Message {
    type: MessageType;
    payload: object;
}

function createMessage(type: MessageType, payload?: object) {
    return ({type, payload: payload || null});
}

export {
    Message, createMessage, MessageType
}
