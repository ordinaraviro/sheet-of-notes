import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Sheet of notes</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const note = {
  add() {
    let newLi = document.createElement("li");
    let span = document.createElement("span");
    let inputValue = document.querySelector(".text-note-to-add").value;
    let noteText = document.createTextNode(inputValue);
    newLi.classList.add("note");
    span.appendChild(noteText);
    span.classList.add("note-text");
    newLi.appendChild(span);
    let buttonUp = document.createElement("button");
    buttonUp.classList.add("up");
    buttonUp.onclick = note.up;
    buttonUp.appendChild(document.createTextNode("up"));
    newLi.appendChild(buttonUp);
    let buttonDown = document.createElement("button");
    buttonDown.classList.add("down");
    buttonDown.onclick = note.down;
    buttonDown.appendChild(document.createTextNode("down"));
    newLi.appendChild(buttonDown);
    let buttonAddSub = document.createElement("button");
    buttonAddSub.classList.add("btn-add-sublist");
    buttonAddSub.appendChild(document.createTextNode("add sublist"));
    newLi.appendChild(buttonAddSub);
    let buttonRemoveSub = document.createElement("button");
    buttonRemoveSub.classList.add("btn-remove-sublist");
    buttonRemoveSub.appendChild(document.createTextNode("remove sublist"));
    newLi.appendChild(buttonRemoveSub);
    let buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove");
    buttonRemove.onclick = note.remove;
    buttonRemove.appendChild(document.createTextNode("remove"));
    newLi.appendChild(buttonRemove);

    let ul = document.querySelector(".list-of-notes");
    let refEl = document.querySelector(".note-to-add");
    ul.insertBefore(newLi, refEl);

    document.querySelector(".text-note-to-add").value = "";
  },
  start() {},
  remove() {
    let li = this.parentNode;
    li.parentNode.removeChild(li);
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

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-note-to-add")) {
    note.add();
  }
  // if (event.target.classList.contains("up")) {
  //   alert("up");
  // }
  // if (event.target.classList.contains("down")) {
  //   note.down();
  // }
  if (event.target.classList.contains("btn-add-sublist")) {
    alert("btn-add-sublist");
  }
  if (event.target.classList.contains("btn-remove-sublist")) {
    alert("btn-remove-sublist");
  }
  if (event.target.classList.contains("remove")) {
  }
});
