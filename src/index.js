import "./styles.css";

document.getElementById("app").innerHTML = `
<ul class="list-of-notes"><li class="note-to-add"><input type="text" class="text-note-to-add" /><button class="btn-note-to-add">Add</button></li></ul>
`;

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
    buttonDown.classList.add("hide");
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
    buttonRemoveSub.classList.add("hide");
    buttonRemoveSub.onclick = methods.removeSublist;
    buttonRemoveSub.appendChild(document.createTextNode("remove sublist"));
    noteContent.appendChild(buttonRemoveSub);
    let buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove");
    buttonRemove.onclick = methods.remove;
    buttonRemove.appendChild(document.createTextNode("remove"));
    noteContent.appendChild(buttonRemove);

    let paOfBtn = this.parentNode;
    let ul = paOfBtn.parentNode;

    if (paOfBtn.previousSibling) {
      alert(
        paOfBtn.previousSibling.firstChild.firstChild.nextSibling.nextSibling
          .classList
      );
      paOfBtn.previousSibling.firstChild.firstChild.nextSibling.nextSibling.classList.remove(
        "hide"
      );
    }
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

    this.nextSibling.classList.remove("hide");
    this.classList.add("hide");
  },
  removeSublist() {
    let div = this.parentNode;
    let li = div.parentNode;
    let scope = div.nextSibling;
    li.removeChild(scope);

    this.previousSibling.classList.remove("hide");
    this.classList.add("hide");
  },
  up() {
    let div = this.parentNode;
    let li = div.parentNode;
    let ul = li.parentNode;
    let preEl = li.previousSibling;
    let emptyLi = document.createElement("li");
    emptyLi.appendChild(document.createTextNode("up error"));
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

    if (afterNextEl.classList.contains("note-to-add")) {
      this.classList.add("hide");
      nextEl.firstChild.firstChild.nextSibling.nextSibling.classList.remove(
        "hide"
      );
    }
  },
  hide() {
    let div = this.parentNode;
    let li = div.parentNode;
    if (li.nextSibling.classList.contains("note-to-add")) {
      if (this.classList.contains("down")) {
        this.classList.add("hide");
      }
    }
  }
};

document.querySelector(".btn-note-to-add").onclick = methods.add;
