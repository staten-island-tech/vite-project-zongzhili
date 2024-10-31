export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
const hotFoods = [
  {
    item: "Spicy Ramen",
    price: 12.99,
    nationality: "Japanese",
    image:
      "https://dinnerthendessert.com/wp-content/uploads/2023/08/Spicy-Ramen-10.jpg",
  },
  {
    item: "Buffalo Wings",
    price: 10.5,
    nationality: "American",
    image: "https://example.com/images/buffalo-wings.jpg", // Add image URL
  },
  {
    item: "Vindaloo Curry",
    price: 14.0,
    nationality: "Indian",
    image: "https://example.com/images/vindaloo-curry.jpg", // Add image URL
  },
  {
    item: "Kimchi Jjigae",
    price: 11.0,
    nationality: "Korean",
    image: "https://example.com/images/kimchi-jjigae.jpg", // Add image URL
  },
  {
    item: "Chili Con Carne",
    price: 9.75,
    nationality: "Mexican",
    image: "https://example.com/images/chili-con-carne.jpg", // Add image URL
  },
  {
    item: "Harissa Chicken",
    price: 13.5,
    nationality: "Tunisian",
    image: "https://example.com/images/harissa-chicken.jpg", // Add image URL
  },
  {
    item: "Mapo Tofu",
    price: 10.25,
    nationality: "Chinese",
    image: "https://example.com/images/mapo-tofu.jpg", // Add image URL
  },
  {
    item: "Piri Piri Chicken",
    price: 15.0,
    nationality: "Portuguese",
    image: "https://example.com/images/piri-piri-chicken.jpg", // Add image URL
  },
];

const container = document.getElementById("container");

hotFoods.forEach((spicy) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="hot">
      <img src="${spicy.image}" alt="${spicy.item}" style="width:100px; height:auto;">
      <p>${spicy.item} - $${spicy.price} (${spicy.nationality})</p>
    </div>`
  );
});

const coldFoods = [
  {
    item: "Caesar Salad",
    price: 9.5,
    nationality: "Italian",
    image:
      "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
  },
  {
    item: "Sushi",
    price: 15.0,
    nationality: "Japanese",
    image: "https://example.com/images/sushi.jpg", // Add image URL
  },
  {
    item: "Gazpacho",
    price: 8.0,
    nationality: "Spanish",
    image: "https://example.com/images/gazpacho.jpg", // Add image URL
  },
  {
    item: "Poke Bowl",
    price: 12.0,
    nationality: "Hawaiian",
    image: "https://example.com/images/poke-bowl.jpg", // Add image URL
  },
  {
    item: "Caprese Salad",
    price: 10.0,
    nationality: "Italian",
    image: "https://example.com/images/caprese-salad.jpg", // Add image URL
  },
  {
    item: "Ceviche",
    price: 14.5,
    nationality: "Peruvian",
    image: "https://example.com/images/ceviche.jpg", // Add image URL
  },
  {
    item: "Greek Salad",
    price: 11.0,
    nationality: "Greek",
    image: "https://example.com/images/greek-salad.jpg", // Add image URL
  },
  {
    item: "Chilled Noodle Salad",
    price: 9.75,
    nationality: "Chinese",
    image: "https://example.com/images/chilled-noodle-salad.jpg", // Add image URL
  },
];

coldFoods.forEach((food) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="cold">
      <img src="${food.image}" alt="${food.item}" style="width:100px; height:auto;">
      <p>${food.item} - $${food.price} (${food.nationality})</p>
    </div>`
  );
});
