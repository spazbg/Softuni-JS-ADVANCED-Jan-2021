function create(words) {
  const content = document.getElementById("content");

  for (let i = 0; i < words.length; i++) {
    const div = document.createElement("div");
    const paragraph = document.createElement("p");

    paragraph.textContent = words[i];
    paragraph.style.display = "none";

    div.appendChild(paragraph);

    div.addEventListener("click", function (e) {
      console.log(e.target);
      const p = e.target.firstChild; // взимаме p от който е тригърнат лисънъра от div-a може и с e.target.children[0] - children връща колекция, но детето е само едно
      // <div>
      // ​	<p style=​"display:​ block;​">​Section 1​</p>​
      // </div>​
      const isVisible = p.style.display === "block";
      p.style.display = isVisible ? "none" : "block";
    });

    content.appendChild(div);
  }
}
