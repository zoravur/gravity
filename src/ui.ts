export function addButtons () {
  let massControl = document.getElementById('mass-control');

  function button(val: string) {
    let button = document.createElement('button');
    button.textContent = val;
    massControl.appendChild(button);
    button.addEventListener('click', () => {
      document.querySelector<HTMLInputElement>('#mass').value = val;
    });
  }
  button("10");
  button("50");
  button("100");
  button("200");
  button("500");
  button("750");
  button("1000");
}

export function translate (cx: CanvasRenderingContext2D) {
  document.addEventListener('mousedown', function(event) {
    let startX = event.offsetX;
    let startY = event.offsetY;

    function handleTranslate (event: MouseEvent) {
      if (event.ctrlKey /*ctrl key is pressed*/) {
        let curX = event.offsetX;
        let curY = event.offsetY;
        //translate page
        cx.transform(0,0,0,0,curX-startX,curY-startY);
      }
    }
    document.addEventListener('mousemove', handleTranslate);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleTranslate);
    });
  });
}

