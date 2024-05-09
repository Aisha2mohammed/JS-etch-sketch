const container = document.querySelector(".container");
const btn = document.querySelector("button");
let input;
let product;

btn.addEventListener("click", (input) => {
  input = parseInt(prompt("Insert the number of square you want to create:"));
  if (input > 0 && input <= 100) {
    product = input * input;
    square(product);
  }
});

function square(product) {
  // container.innerHTML = ""; // Clear previous grid

  const squareWidth = 1002 / input; // Calculate the width of each square based on the number of squares
  const squareHeight = 1032 / input;
  for (let i = 1; i <= product; i++) {
    const div = document.createElement("div");
    div.style.width = `${squareWidth}px`;
    div.style.height = `${squareHeight}px`;
    // div.style.paddingBottom = `${squareSize}%`;
    div.setAttribute("class", "square");
    container.appendChild(div);
  }
}
/
// function square(input) {
//   for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= input; j++) {
//       const div = document.createElement("div");
//       div.setAttribute("class", "square");
//       container.appendChild(div);
//     }

//     container.style.display = "flex";
//     container.style.flexWrap = "wrap";
//   }
// }
