import "/styles/style.css";
import { setupCounter } from "./foods.js";

setupCounter(document.querySelector("#counter"));

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cold")) {
    document.body.classList.add("hot");
    document.body.classList.remove("cold");
  }
});
