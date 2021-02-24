function solve() {
  const inputText = document
    .querySelector("#text")
    .value.toLowerCase()
    .split(" ");

  const inputNamingConvention = document.querySelector("#naming-convention")
    .value;
    
  const resultSpan = document.querySelector("#result");
  resultSpan.textContent = "";
  let result = [];

  if (inputNamingConvention == "Camel Case") {    
    result.push(inputText.shift());
    result.push(inputText.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(""));
    resultSpan.textContent += result.join("");
  } else if (inputNamingConvention == "Pascal Case") {
    return resultSpan.textContent += inputText.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join("");
  } else {
    resultSpan.textContent += "Error!";
  }
}
