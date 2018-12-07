export function Options(onchange) {
    let options = {};

    const fields = [
        ['projectileMass', 'mass', 100],
        ['bigG', 'big-g-control', -50],
        ['inverseDegree', 'inverse-degree-control', 2],
        ['pause', 'pause'],
        ['paths', 'paths'],
        ['integration', 'integration'],
        ['accelerationArrow', 'acceleration-arrow'],
        ['velocityArrow', 'velocity-arrow'],
        ['historyLength', 'history-length', 500],
    ];

    fields.forEach(([key, elementId, defaultVal]) => { 
        options[key] = getValueFromInputElement(document.getElementById(<string>elementId)) || defaultVal;
        watchChange(key,elementId,defaultVal); 
    });

    function watchChange(key, elementId, defaultVal?) {
        document.getElementById(elementId).onchange = function (event) {
            let inputElement = (<HTMLInputElement>event.target);
            options[key] = getValueFromInputElement(inputElement) || defaultVal;
            onchange(options);
           
        }
    }

    function getValueFromInputElement(inputElement) {
        if (inputElement.type == 'checkbox') {
            return inputElement.checked
        } else if (inputElement.type == 'number') {
            return +inputElement.value
        } else {
            return inputElement.value 
        }
    }

    return options;
}



//TODO: change this so that options is an object that will mutate itself based on the changes.
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