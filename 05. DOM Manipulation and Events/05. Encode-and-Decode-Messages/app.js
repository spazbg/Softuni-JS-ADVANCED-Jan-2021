function encodeAndDecodeMessages() {
  const textareas = document.querySelectorAll("textarea");
  const buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", function (e) {
    const message = textareas[0].value
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
      .join("");

    textareas[0].value = "";
    textareas[1].value = message;
  });

  buttons[1].addEventListener("click", function (e) {
    const message = textareas[1].value
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) - 1))
      .join("");

    textareas[1].value = message;
  });
}
