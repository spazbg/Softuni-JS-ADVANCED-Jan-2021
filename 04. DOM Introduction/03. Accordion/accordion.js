function toggle() {
  const button = document.querySelector(".button");
  const divText = document.querySelector("#extra");

  button.textContent = button.textContent == "More" ? "Less" : "More";

  divText.style.display = divText.style.display !== "block" ? "block" : "none";
}
