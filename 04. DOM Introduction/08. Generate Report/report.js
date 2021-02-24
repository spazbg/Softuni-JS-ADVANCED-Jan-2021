function generateReport() {
  let columnsName = Array.from(document.querySelectorAll("thead tr th input"));
  let tableRows = Array.from(document.querySelectorAll("tbody tr"));
  let outputTextbox = document.querySelector("#output");
  let result = [];

  var checkedColumns = columnsName.reduce(function (accumulator, element, i) {
    if (element.checked == true) {
      accumulator.push({ i, name: element.name });
    }
    return accumulator;
  }, []);

  for (const row of tableRows) {
    let checked = {};
    checkedColumns.forEach((col) => {
      checked[col.name] = row.querySelectorAll("td")[col.i].textContent;
    });
    result.push(checked);
  }

  outputTextbox.value = JSON.stringify(result);
}
