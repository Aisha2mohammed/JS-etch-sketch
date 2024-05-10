const container = document.querySelector(".container");
const btn = document.querySelector("button");
let input;
let product;

btn.addEventListener("click", (input) => {
  input = parseInt(prompt("Insert the number of square you want to create:"));
  if (input > 0 && input <= 200) {
    product = input * input;
    square(input);
  }
});

function square(input) {
  const squareWidth = 1000 / input; // Calculate the width of each square based on the number of squares
  const squareHeight = 1000 / input;
  console.log(squareHeight);
  console.log(squareWidth);
  for (let i = 0; i < input; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < input; j++) {
      const div = document.createElement("div");
      div.style.width = `${squareWidth}px`;
      div.style.height = `${squareHeight}px`;
      div.setAttribute("class", "square");
      row.appendChild(div);
    }

    container.appendChild(row);
  }
}
