import Subject from './Subject'

class Store<T> extends Subject<T> {
    state: T;

    constructor(defaultState: T) {
        super();
        this.state = defaultState;
    }

    propagate() {
        this.emit(this.state);
    }
}

export default Store;