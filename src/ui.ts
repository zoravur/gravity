export function addButtons () {
  let massControl = document.getElementById('mass-control');

  function button(val: number) {
    let button = document.createElement('button');
    button.textContent = String(val);
    massControl.appendChild(button);
    button.addEventListener('click', () => {
      document.querySelector<HTMLInputElement>('#mass').value = String(val);
    });
  }
  [10, 100, 250, 500, 1000, 5000].map(button);
}

