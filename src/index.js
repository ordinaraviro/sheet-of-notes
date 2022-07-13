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
    let inputValue = document.getElementsByClassName("text-note-to-add").value;
    let noteText = document.createTextNode(inputValue);
    newLi.appendChild(noteText);
    document.querySelector(".list-of-notes").appendChild(newLi);
    document.getElementsByClassName("text-note-to-add").value = "";
  },
  bb() {},
  remove() {},
  addSublist() {},
  removeSublist() {},
  up() {},
  down() {},
  action(el) {
    const target = el.target;
    if (target.classList.contains("btn-note-to-add")) {
      note.add();
    }
  }
};

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-note-to-add")) {
    alert("add");
  }
  if (event.target.classList.contains("up")) {
    alert("up");
  }
  if (event.target.classList.contains("down")) {
    alert("down");
  }
  if (event.target.classList.contains("btn-add-sublist")) {
    alert("btn-add-sublist");
  }
  if (event.target.classList.contains("btn-remove-sublist")) {
    alert("btn-remove-sublist");
  }
  if (event.target.classList.contains("remove")) {
    alert("remove");
  }
});
