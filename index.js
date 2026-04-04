var listsDiv = document.getElementById("lists");
var btn = document.getElementById("newListBtn");

btn.onclick = function () {
  var container = document.createElement("div");
  container.className = "list";

  var input = document.createElement("input");
  input.placeholder = "Vazifa yoz...";

  var addBtn = document.createElement("button");
  addBtn.textContent = "Qo‘shish";

  var ul = document.createElement("ul");

  addBtn.onclick = function () {
    if (input.value === "") return;

    var li = document.createElementB("li");
    li.textContent = input.value;

    li.onclick = function () {
      li.style.textDecoration = "line-through";
    };

    ul.appendChild(li);
    input.value = "";
  };

  // ENTER ishlasin
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });

  container.appendChild(input);
  container.appendChild(addBtn);
  container.appendChild(ul);

  listsDiv.appendChild(container);
};