
const temperatureInput = document.getElementById('temperatureInput');
const unitSelect = document.getElementById('unitSelect');
const resultDiv = document.getElementById('result');

function convertTemperature(value, unit) {
  if (unit === 'celsius') {
    return ((value - 32) * 5) / 9;
  } else if (unit === 'fahrenheit') {
    return (value * 9) / 5 + 32;
  }
  return value;
}

function updateResult() {
  const inputValue = parseFloat(temperatureInput.value);
  const selectedUnit = unitSelect.value;
  const convertedTemperature = convertTemperature(inputValue, selectedUnit).toFixed(2);
  resultDiv.innerText = convertedTemperature;
}

temperatureInput.addEventListener('input', updateResult);
unitSelect.addEventListener('change', updateResult);
