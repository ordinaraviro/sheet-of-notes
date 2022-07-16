import "./styles.css";

const note = {
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
    buttonUp.onclick = note.up;
    buttonUp.appendChild(document.createTextNode("up"));
    noteContent.appendChild(buttonUp);
    let buttonDown = document.createElement("button");
    buttonDown.classList.add("down");
    buttonDown.onclick = note.down;
    buttonDown.appendChild(document.createTextNode("down"));
    noteContent.appendChild(buttonDown);
    let buttonAddSub = document.createElement("button");
    buttonAddSub.classList.add("btn-add-sublist");
    buttonAddSub.appendChild(document.createTextNode("add sublist"));
    noteContent.appendChild(buttonAddSub);
    let buttonRemoveSub = document.createElement("button");
    buttonRemoveSub.classList.add("btn-remove-sublist");
    buttonRemoveSub.appendChild(document.createTextNode("remove sublist"));
    noteContent.appendChild(buttonRemoveSub);
    let buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove");
    buttonRemove.onclick = note.remove;
    buttonRemove.appendChild(document.createTextNode("remove"));
    noteContent.appendChild(buttonRemove);

    let paOfBtn = this.parentNode;
    let ul = paOfBtn.parentNode;
    ul.insertBefore(note, paOfBtn);

    this.previousSibling.value = "";
  },
  start() {},
  remove() {
    alert("hi");
    // let div = this.parentNode;
    // let li = div.parentNode;
    // li.remove();
    // li.parentNode.removeChild(li);
  },
  addSublist() {},
  removeSublist() {},
  up() {
    let ul = document.querySelector(".list-of-notes");
    let li = this.parentNode;
    let preEl = li.previousSibling;
    let emptyLi = document.createElement("li");
    ul.insertBefore(emptyLi, preEl);
    ul.replaceChild(li, emptyLi);
  },
  down() {
    let ul = document.querySelector(".list-of-notes");
    let li = this.parentNode;
    let nextEl = li.nextSibling;
    let afterNextEl = nextEl.nextSibling;
    let emptyLi = document.createElement("li");
    ul.insertBefore(emptyLi, afterNextEl);
    ul.replaceChild(li, emptyLi);
  }
};

document.querySelector(".btn-note-to-add").onclick = note.add;
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
