const container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
const btn = document.querySelector("button");
let input;
let product;
let i = 1;

btn.addEventListener("click", (input) => {
  input = parseInt(prompt("Insert the number of square you want to create:"));
  if (input > 0 && input <= 100) {
    product = input * input;
    square(product, input);
  }
});
function square(product, input) {
  while (i <= product) {
    if (i == input + 1) {
      const div = document.createElement("div");
      div.setAttribute("class", "square");
      container.appendChild(div);
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      input += input;
    } else {
      const div = document.createElement("div");
      div.setAttribute("class", "square");
      container.appendChild(div);
    }
    i++;
  }
}
// function square(input) {
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= input; j++) {
//       const div = document.createElement("div");
//       div.setAttribute("class", "square");
//       container.appendChild(div);
//     }

//     // container.style.display = "flex";
//     // container.style.flexWrap = "wrap";
//   }
// }
