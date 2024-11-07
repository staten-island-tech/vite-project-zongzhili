import "/styles/style.css";
import { foodProducts } from "./foods.js";

document.querySelector(".btn").addEventListener("click", function () {
  document.body.classList.add("hot");

  /*  if (document.body.classList.contains("cold")) {
    document.body.classList.add("hot");
    document.body.classList.remove("cold");
  }*/
});

/*function removeCards(cards) {
  document.querySelector(".container").innerHTML = "";
}
removeCards();*/
