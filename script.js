let result = document.getElementById("result");

function appendToResult(value) {
  if (result.textContent === "0") {
    result.textContent = value;
  } else {
    const resultBox = document.querySelector(".result-box");
    const resultWidth = resultBox.offsetWidth;
    const textWidth = result.scrollWidth;

    if (textWidth < resultWidth - 20) {
      result.textContent += value;
    } else {
      result.textContent = result.textContent.slice(1) + value;
    }
  }
}

function clearResult() {
  result.textContent = "0";
}

function calculateResult() {
  try {
    result.textContent = eval(result.textContent);
  } catch (error) {
    result.textContent = "Error";
  }
}
