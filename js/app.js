// triangle
document
  .getElementById("triangle-calculate-btn")
  .addEventListener("click", function () {
    
    // get input field value
    const triangleBaseInput = getInputValue("triangle-base-input");
    const triangleHeightInput = getInputValue("triangle-height-input");

    let triangleResult;
    if (
      inputFieldValueLength("triangle-base-input") === 0 ||
      inputFieldValueLength("triangle-height-input") === 0
    ) {
      alert("input field empty");
      return;
    } else if (isNaN(triangleBaseInput) || isNaN(triangleHeightInput)) {
      alert("Please enter number");
    } else if (triangleBaseInput < 0 || triangleHeightInput < 0) {
      alert("Please enter positive number");
    } else {
      // calculate
      triangleResult = 0.5 * triangleBaseInput * triangleHeightInput;

      // input value set on the element
      setInnerText("triangle-value-one", triangleBaseInput);
      setInnerText("triangle-value-two", triangleHeightInput);
    }

    // show result area calculation
    showResultAreaCalculation("order-list", "div", "Triangle", triangleResult);
  });
