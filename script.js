const container = document.querySelector(".container");
const sqr = document.querySelector(".square");
const btn = document.querySelector("button");
const rgb = "rgb(2,5,8)";
let input, multipliedRgb, color, rgbVal;

btn.addEventListener("click", (input) => {
  input = parseInt(prompt("Insert the number of square you want to create:"));
  if (input > 0 && input <= 200) {
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

      div.addEventListener("mouseover", () => {
        let num = Math.floor(Math.random() * 1000);
        console.log(num);
        rgbVal = rgb.match(/\d+/g).map(Number);
        if (num <= 225) {
          multipliedRgb = rgbVal.map((val) => {
            return val * num;
          });
        }
        console.log(multipliedRgb);
        color = `rgb(${multipliedRgb.join(",")})`;
        console.log(color);
        div.style.backgroundColor = `${color}`;
      });

      row.appendChild(div);
    }

    container.appendChild(row);
  }
}
