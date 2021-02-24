function addItem() {
  let newItemText = document.querySelector("#newItemText");
  let newItemValue = document.querySelector("#newItemValue");

  let dropDown = document.querySelector("#menu");

  const newDropdownOption = document.createElement("option");

  newDropdownOption.textContent = newItemText.value;

  newDropdownOption.setAttribute("value", newItemValue.value);

  console.log(newDropdownOption)
  dropDown.appendChild(newDropdownOption);

  newItemText.value = "";
  newItemValue.value = "";

  //     <select id="cars">
  //          <option value="volvo">Volvo</option>
}
