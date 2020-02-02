export default abstract class Subject<T> {
    private callbacks: Array<Function>;

    protected constructor() {
        this.callbacks = [];
    }

    public subscribe(...fn: Array<(data: T) => void>) {
        this.callbacks.push(...fn);
    }

    protected emit(e: T) {
        this.callbacks.forEach(fn => fn(e));
    }
}
