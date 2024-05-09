const container = document.querySelector(".container");
const btn = document.querySelector("button");

container.style.display = "flex";
container.style.flexWrap = "wrap";
let input;
let product;

btn.addEventListener("click", (input) => {
  input = parseInt(prompt("Insert the number of square you want to create:"));
  if (input > 0 && input <= 100) {
    product = input * input;
    square(product);
  }
});

function square(product, input) {
  container.innerHTML = ""; // Clear previous grid

  const squareSize = 100 / input; // Calculate the size of each square based on the number of squares
  for (let i = 0; i <= product; i++) {
    const div = document.createElement("div");
    div.style.width = `${squareSize}%`;
    div.style.height = `${squareSize}%`;
    div.style.paddingBottom = `${squareSize}%`;
    div.setAttribute("class", "square");
    container.appendChild(div);
  }
}
// function square(product, input) {
//   while (i <= product) {
//     if (i == input + 1) {
//       const div = document.createElement("div");
//       div.setAttribute("class", "square");
//       container.appendChild(div);
//     } else {
//       const div = document.createElement("div");
//       div.setAttribute("class", "square");
//       container.appendChild(div);
//     }
//     i++;
//   }
// }
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
