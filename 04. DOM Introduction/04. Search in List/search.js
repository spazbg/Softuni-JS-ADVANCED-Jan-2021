function search() {
  const listOfTowns = Array.from(document.querySelectorAll("#towns li"));
  const searchValue = document.querySelector("#searchText").value;
  const result = document.getElementById("result");

  let sum = 0;
  listOfTowns.filter((el, i, arr) => {
    if (el.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
      arr[i].style.textDecoration = "underline";
      arr[i].style.fontWeight = "bold";
      sum++;
    } else {
      arr[i].style.textDecoration = "";
      arr[i].style.fontWeight = "";
    }
  });

  result.textContent = `${sum} matches found`;
}
