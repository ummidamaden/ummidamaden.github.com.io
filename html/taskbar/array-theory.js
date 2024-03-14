const names = ["Vladilen", "Elena", "Igor", "Kcenya"];

const greateWoman = "Elena";
const index = names.indexOf(greateWoman);
// console.log(index);
const newNames = names.with(index, "Elena Velikaya");
// names[index] = "Elena Velikaya";
// console.log(names[index]);
// console.log(names);
// console.log(names);
// console.log(newNames);

// const capitalNames = names.map(function (name, index) {
//   //   const newName = name + "!";
//   //   return name.toUpperCase();
//   if (index == 1) {
//     return "Elena Velikaya";
//   }
//   return name;
// });

// console.log(capitalNames);

// console.log(names.includes("Igor"));
