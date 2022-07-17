import "./styles.css";

const methods = {
  add() {
    let note = document.createElement("li");
    note.classList.add("note");

    let noteContent = document.createElement("div");
    noteContent.classList.add("note-content");
    note.appendChild(noteContent);

    let span = document.createElement("span");
    let noteText = document.createTextNode(this.previousSibling.value);
    span.appendChild(noteText);
    span.classList.add("note-text");
    noteContent.appendChild(span);

    let buttonUp = document.createElement("button");
    buttonUp.classList.add("up");
    buttonUp.onclick = methods.up;
    buttonUp.appendChild(document.createTextNode("up"));
    noteContent.appendChild(buttonUp);
    let buttonDown = document.createElement("button");
    buttonDown.classList.add("down");
    buttonDown.onclick = methods.down;
    buttonDown.appendChild(document.createTextNode("down"));
    noteContent.appendChild(buttonDown);
    let buttonAddSub = document.createElement("button");
    buttonAddSub.classList.add("btn-add-sublist");
    buttonAddSub.onclick = methods.addSublist;
    buttonAddSub.appendChild(document.createTextNode("add sublist"));
    noteContent.appendChild(buttonAddSub);
    let buttonRemoveSub = document.createElement("button");
    buttonRemoveSub.classList.add("btn-remove-sublist");
    buttonRemoveSub.appendChild(document.createTextNode("remove sublist"));
    noteContent.appendChild(buttonRemoveSub);
    let buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove");
    buttonRemove.onclick = methods.remove;
    buttonRemove.appendChild(document.createTextNode("remove"));
    noteContent.appendChild(buttonRemove);

    let paOfBtn = this.parentNode;
    let ul = paOfBtn.parentNode;
    ul.insertBefore(note, paOfBtn);

    this.previousSibling.value = "";
  },
  start() {},
  remove() {
    let div = this.parentNode;
    let li = div.parentNode;
    li.parentNode.removeChild(li);
  },
  addSublist() {
    let div = this.parentNode;
    let li = div.parentNode;
    let divSub = document.createElement("div");
    divSub.classList.add("note-sublist-content");
    li.appendChild(divSub);
    let newUl = document.createElement("ul");
    newUl.classList.add("list-of-notes");
    divSub.appendChild(newUl);
    let newLi = document.createElement("li");
    newLi.classList.add("note-to-add");
    newUl.appendChild(newLi);
    let input = document.createElement("input");
    input.classList.add("text-note-to-add");
    newLi.appendChild(input);
    let addBtn = document.createElement("button");
    addBtn.classList.add("btn-note-to-add");
    addBtn.appendChild(document.createTextNode("Add"));
    addBtn.onclick = methods.add;
    newLi.appendChild(addBtn);
  },
  removeSublist() {},
  up() {
    let div = this.parentNode;
    let li = div.parentNode;
    let ul = li.parentNode;
    let preEl = li.previousSibling;
    let emptyLi = document.createElement("li");
    ul.insertBefore(emptyLi, preEl);
    ul.replaceChild(li, emptyLi);
  },
  down() {
    let div = this.parentNode;
    let li = div.parentNode;
    let ul = li.parentNode;
    let nextEl = li.nextSibling;
    let afterNextEl = nextEl.nextSibling;
    let emptyLi = document.createElement("li");
    emptyLi.appendChild(document.createTextNode("down error"));
    ul.insertBefore(emptyLi, afterNextEl);
    ul.replaceChild(li, emptyLi);
  }
};

document.querySelector(".btn-note-to-add").onclick = methods.add;
// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("btn-note-to-add")) {
//     note.add();
//   }
//   if (event.target.classList.contains("up")) {
//     alert("up");
//   }
//   if (event.target.classList.contains("down")) {
//     note.down();
//   }
//   if (event.target.classList.contains("btn-add-sublist")) {
//     alert("btn-add-sublist");
//   }
//   if (event.target.classList.contains("btn-remove-sublist")) {
//     alert("btn-remove-sublist");
//   }
//   if (event.target.classList.contains("remove")) {
//   }
// });
