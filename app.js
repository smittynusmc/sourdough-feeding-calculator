const ratioSelect = document.querySelector('#ratio');
const starterInput = document.querySelector('#starter');
const waterOutput = document.querySelector('#water');
const flourOutput = document.querySelector('#flour');
const totalOutput = document.querySelector('#total');
const clearButton = document.querySelector('#clear');
const doneButton = document.querySelector('#done');

function parseStarter(value) {
  const normalized = value.trim().replace(',', '.');
  const amount = Number.parseFloat(normalized);
  return Number.isFinite(amount) && amount >= 0 ? amount : 0;
}

function formatGrams(value) {
  if (!Number.isFinite(value) || value === 0) return '0 g';
  if (Number.isInteger(value)) return `${value} g`;
  return `${value.toFixed(1)} g`;
}

function calculate() {
  const option = ratioSelect.options[ratioSelect.selectedIndex];
  const starter = parseStarter(starterInput.value);
  const waterMultiplier = Number(option.dataset.water);
  const flourMultiplier = Number(option.dataset.flour);

  const water = starter * waterMultiplier;
  const flour = starter * flourMultiplier;
  const total = starter + water + flour;

  waterOutput.textContent = formatGrams(water);
  flourOutput.textContent = formatGrams(flour);
  totalOutput.textContent = formatGrams(total);
  clearButton.hidden = starterInput.value.trim() === '';
}

ratioSelect.addEventListener('change', calculate);
starterInput.addEventListener('input', calculate);

starterInput.addEventListener('focus', () => {
  doneButton.hidden = false;
});

starterInput.addEventListener('blur', () => {
  window.setTimeout(() => {
    doneButton.hidden = document.activeElement !== starterInput;
  }, 0);
});

doneButton.addEventListener('click', () => {
  starterInput.blur();
  doneButton.hidden = true;
});

clearButton.addEventListener('click', () => {
  starterInput.value = '';
  calculate();
  starterInput.focus();
});

calculate();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {
      // The calculator still works online if service-worker registration fails.
    });
  });
}
