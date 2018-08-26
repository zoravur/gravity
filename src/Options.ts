export default {
    get projectileMass():number {
        return +(document.querySelector<HTMLInputElement>('#mass').value || 100);
    },
    get bigG(): number {
        return +(document.querySelector<HTMLInputElement>('#big-g-control').value || -50);
    },
    get inverseDegree(): number {
        return +(document.querySelector<HTMLInputElement>('#inverse-degree-control').value || 2);
    },
    get pause(): boolean {
        return document.querySelector<HTMLInputElement>('#pause').checked;
    },

    get paths(): boolean {
        return document.querySelector<HTMLInputElement>('#paths').checked;
     },

    get integration(): string {
        return document.querySelector<HTMLInputElement>('#integration').value;
    },

    get accelerationArrow(): boolean {
        return document.querySelector<HTMLInputElement>('#acceleration-arrow').checked;
    },

    get velocityArrow(): boolean {
        return document.querySelector<HTMLInputElement>('#velocity-arrow').checked;
    }
}