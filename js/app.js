// triangle
document
  .getElementById("triangle-calculate-btn")
  .addEventListener("click", function () {
    const triangleBaseInput = getInputValue("triangle-base-input");
    const triangleHeightInput = getInputValue("triangle-height-input");

    // input text set
    inputValueSetText("triangle-value-one", triangleBaseInput);
    inputValueSetText("triangle-value-two", triangleHeightInput);

    const triangleResult = 0.5 * triangleBaseInput * triangleHeightInput;
    console.log(triangleResult)
  });
