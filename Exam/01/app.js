function solve() {
  const authorTextBox = document.getElementById("creator");
  const titleTextBox = document.getElementById("title");
  const categoryTextBox = document.getElementById("category");
  const contentTextBox = document.getElementById("content");
  const postsArea = document.querySelector("main section");
  const archiveArea = document.querySelector("section[class='archive-section'] ol");

  const createBtn = document.querySelector('button[class="btn create"]');
  createBtn.addEventListener("click", onClick);

  function onClick(event) {
    event.preventDefault();

    let article = createElement("article");

    let h1 = createElement("h1", `${titleTextBox.value}`);
    let pCategory = createElement("p", "Category:");
    let pCategoryStrong = createElement("strong", `${categoryTextBox.value}`);
    pCategory.appendChild(pCategoryStrong);

    let pCreator = createElement("p", "Creator:");
    let pCreatorStrong = createElement("strong", `${authorTextBox.value}`);
    pCreator.appendChild(pCreatorStrong);

    let pText = createElement("p", `${contentTextBox.value}`);

    let divBtns = createElement("div", undefined, "buttons");
    let delBtn = createElement("button", "Delete", "btn delete");
    delBtn.addEventListener("click", onClickDelBtn);
    let archiveBtn = createElement("button", "Archive", "btn archive");
    archiveBtn.addEventListener("click", onClickArchiveBtn);

    divBtns.appendChild(delBtn);
    divBtns.appendChild(archiveBtn);

    article.appendChild(h1);
    article.appendChild(pCategory);
    article.appendChild(pCreator);
    article.appendChild(pText);
    article.appendChild(divBtns);

    postsArea.appendChild(article);

    authorTextBox.value = "";
    titleTextBox.value = "";
    categoryTextBox.value = "";
    contentTextBox.value = "";
  }

  function onClickDelBtn(event) {
    event.target.parentNode.parentNode.remove();
  }
  function onClickArchiveBtn(event) {
    let titleName = event.target.parentNode.parentNode.firstChild.textContent;
    let li = document.createElement("li");
    li.textContent = titleName;

    event.target.parentNode.parentNode.remove();

    archiveArea.appendChild(li);

    sortArchivedElements();
  }

  function sortArchivedElements() {
    let allLis = Array.from(archiveArea.querySelectorAll("li"));
    allLis.sort((a, b) => a.textContent.localeCompare(b.textContent));
    archiveArea.innerHTML = "";
    allLis.forEach((li) => archiveArea.appendChild(li));
  }

  function createElement(type, content, className) {
    const result = document.createElement(type);

    if (content) {
      result.textContent = content;
    }

    if (className) {
      result.className = className;
    }

    return result;
  }
}
