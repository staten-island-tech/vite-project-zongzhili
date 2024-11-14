import "/styles/style.css";
import { foodProducts } from "./products.js";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cold")) {
    document.body.classList.add("hot");
    document.body.classList.remove("cold");
  } else {
    document.body.classList.add("cold");
    document.body.classList.remove("hot");
  }
});

const container = document.getElementById("container");
foodProducts.sort((a, b) => a.price - b.price);

foodProducts.forEach((food) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class = "foods">
      <img src="${food.image}" alt="${food.item}">
      <h4>${food.item}<br></h4> <h5>$${food.price} (${food.nationality})</h5>
    </div>`
  );
});

document.getElementById("asianDishes").addEventListener("click", function () {
  document.getElementById("container").innerHTML = "";

  const asianDishes = foodProducts.filter((asian) => asian.id === "asian");

  asianDishes.forEach((food) => {
    document.getElementById("container").insertAdjacentHTML(
      "beforeend",
      `<div class = "foods">
        <img src="${food.image}" alt="${food.item}">
        <h4>${food.item}<br></h4> <h5>$${food.price} (${food.nationality})</h5>
      </div>`
    );
  });
});

document.getElementById("salad").addEventListener("click", function () {
  document.getElementById("container").innerHTML = "";

  const sortSalad = foodProducts.sort((a, b) => a.price - b.price);

  sortSalad.forEach((food) => {
    if (food.id === "salad") {
      document.getElementById("container").insertAdjacentHTML(
        "beforeend",
        `<div class = "foods">
          <img src="${food.image}" alt="${food.item}">
          <h4>${food.item}<br></h4> <h5>$${food.price} (${food.nationality})</h5>
        </div>`
      );
    }
  });
});

document.getElementById("all").addEventListener("click", function () {
  document.getElementById("container").innerHTML = "";
  foodProducts.forEach((food) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class = "foods">
        <img src="${food.image}" alt="${food.item}">
        <h4>${food.item}<br></h4><h5>$${food.price} (${food.nationality})</h5>
      </div>`
    );
  });
});
