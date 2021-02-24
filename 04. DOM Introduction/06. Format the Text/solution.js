function solve() {
  let text = document.getElementById("input").value;
  let output = document.getElementById("output");

  let arrSentences = text
    .split(".")
    .map((el) => el.trim())
    .filter((el) => el.length > 1);

  let result = [];

  if (arrSentences.length % 3 !== 0) {
    let lastParagraph = arrSentences.slice(-1 * (arrSentences.length % 3));
    arrSentences.splice(-1 * (arrSentences.length % 3));

    while (arrSentences.length) {
      result.push(`<p>${arrSentences.splice(0, 3).join(". ")}.</p>`);
    }
    result.push(`<p>${lastParagraph.splice(0, 3).join(". ")}.</p>`);
  } else {
    while (arrSentences.length) {
      result.push(`<p>${arrSentences.splice(0, 3).join(". ")}.</p>`);
    }
  }

  output.innerHTML += result;
}
