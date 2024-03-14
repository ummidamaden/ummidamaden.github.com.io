/*// Theory
// const array = [1, 2, 3, 5, 20, 42, 111];
// const arrayStrings = ["a", "b", "c", null, 12];
// const array = new Array(1, 2, 3, 5, 20, 42);
// console.log(array.length);
// console.log(array[1]);
// console.log(array[5]);
// console.log(array[10]);
// console.log(array[array.length - 1]); // array[6 - 1]
// array[0] = "Privet!";
// console.log(array);
// array[array.length] = "becon";*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement);
// const notes = ["zapisat blog pro massivy", "rassakazat teory obeactov"];

// function render() {
//   //   for (let i = 0; i < notes.length; i++) {
//   //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
//   //   }
//   //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[0]));
//   //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[1]));
//   //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[2]));

//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//   }
// }

// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length == 0) {
//     return;
//   }
//   //   listElement.innerHTML = `
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = "";
// };

// function getNoteTemplate(title) {
//   return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${title}</span>
//       <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>`;
// }

/**
 * Oblect Theory
const person = {
  firstName: "Ummida",
  lastName: "Maden",
  year: 2007,
  hasBoyfriend: false,
  languages: ["kz", "ru", "en"],
  getFullName: function () {
    console.log(person.firstName + " " + person.lastName);
  },
};

console.log(person.year);
console.log(person["languages"]);
const key = "hasBoyfriend";
console.log(person[key]);
person.hasBoyfriend = true;
console.log(person[key]);
person.getFullName();
// console.log(typeof person);
*/

const notes = [
  {
    title: "zapisat blog pro massivy",
    completed: false,
  },
  {
    title: "rassakazat teory obeactov",
    completed: true,
  },
];

function render() {
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
  //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[0]));
  //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[1]));
  //   listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[2]));
  //   for (let [note, index] of notes.entries()) {
  //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  //   }
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length == 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));

  //   notes.push(newNote);
  //   //   listElement.innerHTML = `
  //   listElement.insertAdjacentHTML(
  //     "beforeend",
  //     getNoteTemplate(inputElement.value)
  //   );
  inputElement.value = "";
};

function getNoteTemplate(note, index) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
      <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success"
        }" data-index="${index}">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
      </span>
    </li>`;
}
