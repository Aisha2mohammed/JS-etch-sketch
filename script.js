const container = document.querySelector(".container");
const btn = document.querySelector("button");
let input;
let product;
let i = 1;

btn.addEventListener("click", function () {
  input = parseInt(prompt("Insert the number of square you want to create:"));
  product = input * input;
  square(product, input);
});
function square(product, input) {
  while (i <= product) {
    const span = document.createElement("span");
    span.setAttribute("class", "square");

    if (i > input) {
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      input += input;
    }

    container.appendChild(span);

    i++;
  }
}
