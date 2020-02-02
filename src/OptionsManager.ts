import Subject from "./Subject";
import * as objectPath from 'object-path';

interface Options {
  particles: {
    mass: number
  };
  playback: {
    pause: boolean,
    speed: number
  };
  display: {
    forceVectors: boolean,
    velocityVectors: boolean,
    paths: boolean
  };
}

const inputFieldIds = ['mass', 'pause', /*'speed',*/ 'force', 'velocity', 'paths'];
const optObjectPaths = ['particles.mass', 'playback.pause',
  /*'playback.speed', */'display.forceVectors', 'display.velocityVectors', 'display.paths'];

export default class OptionsManager extends Subject<Options> {
  currentOptions: Options;

  constructor() {
    super();
    this.currentOptions = {
      particles: { mass: 50 },
      playback: { pause: false, speed: 1 },
      display: { forceVectors: false, velocityVectors: false, paths: false }
    }
  }

  createEventListener(path) {
    let self = this;
    return function onchange(event: Event) {
      let target = <HTMLInputElement>(event.target);
      let value: number | boolean;
      switch (target.type) {
        case 'number': value = Number(target.value); break;
        case 'checkbox': value = target.checked; break;
      }
      objectPath.set(self.currentOptions, path, value);
      self.emit(self.currentOptions);
    }
  }

  registerHandlers() {
    this.addButtons()
    inputFieldIds.forEach((id, idx) => {
      let inputEl : HTMLInputElement = document.getElementById(id) as HTMLInputElement;

      inputEl.onchange = this.createEventListener(optObjectPaths[idx]);
    })
  }

  addButtons() {
    let massControl = document.getElementById('mass-control');

    function button([val, label]: [number, string]) {
      let button = document.createElement('button');
      button.textContent = String(label);
      massControl.appendChild(button);
      massControl.appendChild(document.createElement("br"));
      button.addEventListener('click', () => {
        let massEl = document.getElementById('mass') as HTMLInputElement;
        massEl.value = String(val);
        massEl.onchange({
          AT_TARGET: 0,
          BUBBLING_PHASE: 0,
          CAPTURING_PHASE: 0,
          NONE: 0,
          bubbles: false,
          cancelBubble: false,
          cancelable: false,
          composed: false,
          currentTarget: undefined,
          defaultPrevented: false,
          eventPhase: 0,
          isTrusted: false,
          returnValue: false,
          srcElement: undefined,
          timeStamp: 0,
          type: "",
          deepPath(): EventTarget[] {
            return [];
          },
          initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void {
          },
          preventDefault(): void {
          },
          stopImmediatePropagation(): void {
          },
          stopPropagation(): void {
          },
          target: massEl
        });
      });
    }
    [[1, 'Tiny'],
      [10, 'Small'],
      [100, 'Medium'],
      [500, 'Large'],
      [2500, 'Huge'],
      [10000, 'Gigantic']
    ].map(button);
  }
}

