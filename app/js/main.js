import "/styles/style.css";
import { foodProducts } from "../js/food.js";

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

foodProducts.forEach((food) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class = "foods">
      <img src="${food.image}" alt="${food.item}">
      <p>${food.item} - $${food.price} (${food.nationality})</p>
    </div>`
  );
});

/*function removeCards(cards) {
  document.querySelector(".container").innerHTML = "";
}
removeCards();*/
