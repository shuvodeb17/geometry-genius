// get input field value
function getInputValue(inputFieldId) {
  const input = document.getElementById(inputFieldId);
  const convertInput = parseFloat(input.value);
  return convertInput;
}

// input field length
function inputFieldValueLength(inputId) {
    const input = document.getElementById(inputId).value.length;
    return input
}

// setInnerText
function setInnerText(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// show result area calculation
function showResultAreaCalculation(orderList, createElement, calculateResultName, result) {
  const ol = document.getElementById(orderList);
  const createDiv = document.createElement(createElement);
  createDiv.className = "ol-child";
  createDiv.innerHTML = `
        <li>${calculateResultName}</li>
        <p>${result.toFixed(2)}Cm<sup>2</sup></p>
        <button class="btn btn-primary">Convert to m<sup>2</sup></button>
    `;
  ol.appendChild(createDiv);
}