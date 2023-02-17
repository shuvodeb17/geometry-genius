function getInputValue(inputFieldId) {
  const input = document.getElementById(inputFieldId);
  const convertInput = parseFloat(input.value);
  return convertInput;
}

function inputValueSetText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
