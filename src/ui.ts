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
  [1, 10, 100, 500, 1000, 2500, 5000, 10000, 50000, 100000].map(button);
}

