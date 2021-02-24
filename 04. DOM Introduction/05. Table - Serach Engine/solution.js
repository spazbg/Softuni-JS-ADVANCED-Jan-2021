function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    //table tbody tr
    //searchField

    const tableRows = Array.from(document.querySelectorAll("table tbody tr"));
    const searchValue = document.querySelector("#searchField").value;

    tableRows.filter((row, i, arr) => {
      if (row.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
        arr[i].classList.add("select");
      } else {
        //arr[i].classList.remove("select");
        arr[i].removeAttribute("class");
      }
    });
  }
}
