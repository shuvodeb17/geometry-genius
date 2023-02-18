//   blog file
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

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

// Rectangle
document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    // get input field value
    const rectangleWidthInput = getInputValue("rectangle-width-input");
    const rectangleLengthInput = getInputValue("rectangle-length-input");

    let rectangleResult;
    if (
      inputFieldValueLength("rectangle-width-input") === 0 ||
      inputFieldValueLength("rectangle-length-input") === 0
    ) {
      alert("input field empty");
      return;
    } else if (isNaN(rectangleWidthInput) || isNaN(rectangleLengthInput)) {
      alert("Please enter number");
    } else if (rectangleWidthInput < 0 || rectangleLengthInput < 0) {
      alert("Please enter positive number");
    } else {
      // calculate
      rectangleResult = rectangleWidthInput * rectangleLengthInput;

      // input value set on the element
      setInnerText("rectangle-value-one", rectangleWidthInput);
      setInnerText("rectangle-value-two", rectangleLengthInput);
    }

    // show result area calculation
    showResultAreaCalculation(
      "order-list",
      "div",
      "Rectangle",
      rectangleResult
    );
  });

// parallelogram
document
  .getElementById("parallelogram-calculate-btn")
  .addEventListener("click", function () {
    // get input field value
    const parallelogramBaseInput = getInputValue("parallelogram-base-input");
    const parallelogramHeightInput = getInputValue(
      "parallelogram-height-input"
    );

    let parallelogramResult;
    if (
      inputFieldValueLength("parallelogram-base-input") === 0 ||
      inputFieldValueLength("parallelogram-height-input") === 0
    ) {
      alert("input field empty");
      return;
    } else if (
      isNaN(parallelogramBaseInput) ||
      isNaN(parallelogramHeightInput)
    ) {
      alert("Please enter number");
    } else if (parallelogramBaseInput < 0 || parallelogramHeightInput < 0) {
      alert("Please enter positive number");
    } else {
      // calculate
      parallelogramResult = parallelogramBaseInput * parallelogramHeightInput;

      // input value set on the element
      setInnerText("parallelogram-value-one", parallelogramBaseInput);
      setInnerText("parallelogram-value-two", parallelogramHeightInput);
    }

    // show result area calculation
    showResultAreaCalculation(
      "order-list",
      "div",
      "Parallelogram",
      parallelogramResult
    );
  });

// Rhombus
document
  .getElementById("rhombus-calculate-btn")
  .addEventListener("click", function () {
    // get input field value
    const rhombusDOneInput = getInputValue("rhombus-d-one-input");
    const rhombusDTwoInput = getInputValue("rhombus-d-two-input");

    let rhombusResult;
    if (
      inputFieldValueLength("rhombus-d-one-input") === 0 ||
      inputFieldValueLength("rhombus-d-two-input") === 0
    ) {
      alert("input field empty");
      return;
    } else if (isNaN(rhombusDOneInput) || isNaN(rhombusDTwoInput)) {
      alert("Please enter number");
    } else if (rhombusDOneInput < 0 || rhombusDTwoInput < 0) {
      alert("Please enter positive number");
    } else {
      // calculate
      rhombusResult = 0.5 * rhombusDOneInput * rhombusDTwoInput;

      // input value set on the element
      setInnerText("rhombus-value-one", rhombusDOneInput);
      setInnerText("rhombus-value-two", rhombusDTwoInput);
    }

    // show result area calculation
    showResultAreaCalculation("order-list", "div", "Rhombus", rhombusResult);
  });

// pentagon
document
  .getElementById("pentagon-calculate-btn")
  .addEventListener("click", function () {
    // get input field value
    const pentagonPInput = getInputValue("pentagon-p-input");
    const pentagonBInput = getInputValue("pentagon-b-input");

    let pentagonResult;
    if (
      inputFieldValueLength("pentagon-p-input") === 0 ||
      inputFieldValueLength("pentagon-b-input") === 0
    ) {
      alert("input field empty");
      return;
    } else if (isNaN(pentagonPInput) || isNaN(pentagonBInput)) {
      alert("Please enter number");
    } else if (pentagonPInput < 0 || pentagonBInput < 0) {
      alert("Please enter positive number");
    } else {
      // calculate
      pentagonResult = 0.5 * pentagonPInput * pentagonBInput;

      // input value set on the element
      setInnerText("pentagon-value-one", pentagonPInput);
      setInnerText("pentagon-value-two", pentagonBInput);
    }

    // show result area calculation
    showResultAreaCalculation("order-list", "div", "Pentagon", pentagonResult);
  });

// Ellipse
document
  .getElementById("ellipse-calculate-btn")
  .addEventListener("click", function () {
    // get input field value
    const ellipseInputOne = getInputValue("ellipse-input-one");
    const ellipseInputTwo = getInputValue("ellipse-input-two");

    let ellipseResult;
    if (
      inputFieldValueLength("ellipse-input-one") === 0 ||
      inputFieldValueLength("ellipse-input-two") === 0
    ) {
      alert("input field empty");
      return;
    } else if (isNaN(ellipseInputOne) || isNaN(ellipseInputTwo)) {
      alert("Please enter number");
    } else if (ellipseInputOne < 0 || ellipseInputTwo < 0) {
      alert("Please enter positive number");
    } else {
      // calculate
      ellipseResult = 3.14 * ellipseInputOne * ellipseInputTwo;

      // input value set on the element
      setInnerText("ellipse-value-one", ellipseInputOne);
      setInnerText("ellipse-value-two", ellipseInputTwo);
    }

    // show result area calculation
    showResultAreaCalculation("order-list", "div", "Ellipse", ellipseResult);
  });



//   random color
document
  .getElementById("triangle-card")
  .addEventListener("mouseenter", function () {
    document.getElementById("triangle-card").style.backgroundColor =
      randomColor();
  });

document
  .getElementById("rectangle-card")
  .addEventListener("mouseenter", function () {
    document.getElementById("rectangle-card").style.backgroundColor =
      randomColor();
  });

document
  .getElementById("parallelogram-card")
  .addEventListener("mouseenter", function () {
    document.getElementById("parallelogram-card").style.backgroundColor =
      randomColor();
  });

document
  .getElementById("rhombus-card")
  .addEventListener("mouseenter", function () {
    document.getElementById("rhombus-card").style.backgroundColor =
      randomColor();
  });

document
  .getElementById("pentagon-card")
  .addEventListener("mouseenter", function () {
    document.getElementById("pentagon-card").style.backgroundColor =
      randomColor();
  });

document
  .getElementById("ellipse-card")
  .addEventListener("mouseenter", function () {
    document.getElementById("ellipse-card").style.backgroundColor =
      randomColor();
  });
