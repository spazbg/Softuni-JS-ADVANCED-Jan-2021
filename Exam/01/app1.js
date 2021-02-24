function solve(){

   function sortList(list) {
      var list, i, switching, b, shouldSwitch;

      switching = true;

      while (switching) {
        switching = false;
        b = list.getElementsByTagName("li");

        for (i = 0; i < (b.length - 1); i++) {
          shouldSwitch = false;

          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }

        if (shouldSwitch) {
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
   }


   function deleteArticle(event) {
      event.preventDefault();

      // get and remove article
      const buttons = event.target.parentNode;
      const article = buttons.parentNode;
      article.remove();
   }

   function archiveArticle(event) {
      event.preventDefault();

      // get title element text
      const buttons = event.target.parentNode;
      const article = buttons.parentNode;
      const titleElement = article.getElementsByTagName('h1')[0];
      const titleText = titleElement.innerHTML;

      // get archive ordered list & create list item
      const archiveSection = document.getElementsByClassName("archive-section")[0]
      const orderedList = archiveSection.getElementsByTagName('ol')[0];
      const listItem = document.createElement('li');

      // update list and remove article
      listItem.appendChild(document.createTextNode(titleText));
      orderedList.appendChild(listItem);
      sortList(orderedList);
      article.remove();
   }

   function createArticle(event) {
      event.preventDefault();

      // form data
      const creator = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;

      // get DOM elements
      const siteContent = document.getElementsByClassName("site-content")[0];
      const main = siteContent.getElementsByTagName('main')[0];
      const section = main.getElementsByTagName('section')[0];

      // create new elements
      const article = document.createElement("article");
      const titleElement = document.createElement('h1');
      const categoryElement = document.createElement('p');
      const creatorElement = document.createElement('p');
      const contentElement = document.createElement('p');
      const categoryElementText = document.createElement('strong');
      const creatorElementText = document.createElement('strong');
      const buttons = document.createElement('div');
      const deleteBtn = document.createElement('button');
      const archiveBtn = document.createElement('button');

      // set data to elements
      titleElement.appendChild(document.createTextNode(title));
      categoryElementText.appendChild(document.createTextNode(category));
      creatorElementText.appendChild(document.createTextNode(creator));
      categoryElement.appendChild(document.createTextNode("Category: "));
      creatorElement.appendChild(document.createTextNode("Creator: "));
      categoryElement.appendChild(categoryElementText);
      creatorElement.appendChild(creatorElementText);
      contentElement.appendChild(document.createTextNode(content));
      deleteBtn.appendChild(document.createTextNode('Delete'));
      archiveBtn.appendChild(document.createTextNode('Archive'));
      buttons.appendChild(deleteBtn);
      buttons.appendChild(archiveBtn);

      // add classes
      buttons.classList.add("buttons");
      deleteBtn.classList.add("btn");
      archiveBtn.classList.add("btn");
      deleteBtn.classList.add("delete");
      archiveBtn.classList.add("archive");

      // add event listeners
      deleteBtn.addEventListener("click", deleteArticle);
      archiveBtn.addEventListener("click", archiveArticle);

      // append elements
      article.appendChild(titleElement);
      article.appendChild(categoryElement);
      article.appendChild(creatorElement);
      article.appendChild(contentElement);
      article.appendChild(buttons);

      // update DOM
      section.appendChild(article);
   }

   const createBtn = document.getElementsByClassName('create')[0];
   createBtn.addEventListener("click", createArticle);

}