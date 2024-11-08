import "/styles/style.css";
import { foodProducts } from "./foods.js";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cold")) {
    document.body.classList.add("hot");
    document.body.classList.remove("cold");
  } else {
    document.body.classList.add("cold");
    document.body.classList.remove("hot");
  }
});

/*function removeCards(cards) {
  document.querySelector(".container").innerHTML = "";
}
removeCards();*/
