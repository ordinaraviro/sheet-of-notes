const methods = {
  add(e) {
    let note = document.createElement("li");
    note.classList.add("note");

    let noteContent = document.createElement("div");
    noteContent.classList.add("note-content");
    note.appendChild(noteContent);

    let span = document.createElement("span");
    let noteText = document.createTextNode(e.previousSibling.value);
    span.appendChild(noteText);
    span.classList.add("note-text");
    noteContent.appendChild(span);

    let buttonUp = document.createElement("button");
    buttonUp.classList.add("up");
    buttonUp.appendChild(document.createTextNode("up"));
    noteContent.appendChild(buttonUp);
    let buttonDown = document.createElement("button");
    buttonDown.classList.add("down");
    buttonDown.classList.add("hide");
    buttonDown.appendChild(document.createTextNode("down"));
    noteContent.appendChild(buttonDown);
    let buttonAddSub = document.createElement("button");
    buttonAddSub.classList.add("btn-add-sublist");
    buttonAddSub.appendChild(document.createTextNode("add sublist"));
    noteContent.appendChild(buttonAddSub);
    let buttonRemoveSub = document.createElement("button");
    buttonRemoveSub.classList.add("btn-remove-sublist");
    buttonRemoveSub.classList.add("hide");
    buttonRemoveSub.appendChild(document.createTextNode("remove sublist"));
    noteContent.appendChild(buttonRemoveSub);
    let buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove");
    buttonRemove.appendChild(document.createTextNode("remove"));
    noteContent.appendChild(buttonRemove);

    let paOfBtn = e.parentNode;
    let ul = paOfBtn.parentNode;

    if (paOfBtn.previousSibling) {
      paOfBtn.previousSibling.firstChild.firstChild.nextSibling.nextSibling.classList.remove(
        "hide"
      );
    }

    ul.insertBefore(note, paOfBtn);

    if (paOfBtn.previousSibling === ul.firstChild) {
      buttonUp.classList.add("hide");
    }

    e.previousSibling.value = "";
    methods.save();
  },
  start() {
    let storageList = localStorage.getItem("savedListOfNotes");
    if (storageList) {
      document.querySelector(".list-of-notes-app").innerHTML = storageList;
    } else {
      document.getElementById("app").innerHTML = `
<ul class="list-of-notes"><li class="note-to-add"><input type="text" class="text-note-to-add" /><button class="btn-note-to-add">Add</button></li></ul>
`;
    }
    document.querySelector(".list-of-notes-app").onclick = methods.action;
  },
  save() {
    localStorage.setItem(
      "savedListOfNotes",
      document.querySelector(".list-of-notes-app").innerHTML
    );
  },
  remove(e) {
    let div = e.parentNode;
    let li = div.parentNode;
    if (
      e.previousSibling.previousSibling.previousSibling.previousSibling.classList.contains(
        "hide"
      ) &&
      !e.previousSibling.previousSibling.previousSibling.classList.contains(
        "hide"
      )
    ) {
      li.nextSibling.firstChild.firstChild.nextSibling.classList.add("hide");
    }
    if (
      e.previousSibling.previousSibling.previousSibling.classList.contains(
        "hide"
      ) &&
      !e.previousSibling.previousSibling.previousSibling.previousSibling.classList.contains(
        "hide"
      )
    ) {
      li.previousSibling.firstChild.firstChild.nextSibling.nextSibling.classList.add(
        "hide"
      );
    }
    li.parentNode.removeChild(li);
  },
  addSublist(e) {
    let div = e.parentNode;
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
    newLi.appendChild(addBtn);

    e.nextSibling.classList.remove("hide");
    e.classList.add("hide");
  },
  removeSublist(e) {
    let div = e.parentNode;
    let li = div.parentNode;
    let scope = div.nextSibling;
    li.removeChild(scope);

    e.previousSibling.classList.remove("hide");
    e.classList.add("hide");
  },
  up(e) {
    let div = e.parentNode;
    let li = div.parentNode;
    let ul = li.parentNode;
    let preEl = li.previousSibling;
    let emptyLi = document.createElement("li");
    emptyLi.appendChild(document.createTextNode("up error"));
    ul.insertBefore(emptyLi, preEl);
    ul.replaceChild(li, emptyLi);

    if (e.nextSibling.classList.contains("hide")) {
      e.nextSibling.classList.remove("hide");
      preEl.firstChild.firstChild.nextSibling.nextSibling.classList.add("hide");
    }

    if (preEl.firstChild.firstChild.nextSibling.classList.contains("hide")) {
      preEl.firstChild.firstChild.nextSibling.classList.remove("hide");
      e.classList.add("hide");
    }
  },
  down(e) {
    let div = e.parentNode;
    let li = div.parentNode;
    let ul = li.parentNode;
    let nextEl = li.nextSibling;
    let afterNextEl = nextEl.nextSibling;
    let emptyLi = document.createElement("li");
    emptyLi.appendChild(document.createTextNode("down error"));
    ul.insertBefore(emptyLi, afterNextEl);
    ul.replaceChild(li, emptyLi);

    if (afterNextEl.classList.contains("note-to-add")) {
      e.classList.add("hide");
      nextEl.firstChild.firstChild.nextSibling.nextSibling.classList.remove(
        "hide"
      );
    }

    if (e.previousSibling.classList.contains("hide")) {
      e.previousSibling.classList.remove("hide");
      nextEl.firstChild.firstChild.nextSibling.classList.add("hide");
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
  },
  action() {
    const target = event.target;
    if (target.classList.contains("btn-note-to-add")) {
      methods.add(target);
    }
    if (target.classList.contains("up")) {
      methods.up(target);
    }
    if (target.classList.contains("down")) {
      methods.down(target);
    }
    if (target.classList.contains("remove")) {
      methods.remove(target);
    }
    if (target.classList.contains("btn-add-sublist")) {
      methods.addSublist(target);
    }
    if (target.classList.contains("btn-remove-sublist")) {
      methods.removeSublist(target);
    }
  }
};
methods.start();
