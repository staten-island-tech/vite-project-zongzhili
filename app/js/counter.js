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
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2024/01/buffalo-wings-overhead-horizontal-WR-scaled.jpg",
  },
  {
    item: "Vindaloo Curry",
    price: 14.0,
    nationality: "Indian",
    image:
      "https://niksharmacooks.com/wp-content/uploads/2022/12/Chicken-VindalooDSC_6147.jpg",
  },
  {
    item: "Kimchi Jjigae",
    price: 11.0,
    nationality: "Korean",
    image:
      "https://thekoreanvegan.com/wp-content/uploads/2017/08/Hero-Image-of-Vegan-Kimchi-Jjigae-scaled-e1713109792837.jpg",
  },
  {
    item: "Chili Con Carne",
    price: 9.75,
    nationality: "Mexican",
    image:
      "https://www.allrecipes.com/thmb/YWy5hnm701EfWZPrIFH1B7dlZiI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/89993-award-winning-chili-con-carne-ddmfs-step-3-2f75308d10e94a729502d3f7e10d257e.jpg",
  },
  {
    item: "Harissa Chicken",
    price: 13.5,
    nationality: "Tunisian",
    image:
      "https://carlsbadcravings.com/wp-content/uploads/2021/05/Harissa-Chicken-5.jpg",
  },
  {
    item: "Mapo Tofu",
    price: 10.25,
    nationality: "Chinese",
    image:
      "https://omnivorescookbook.com/wp-content/uploads/2022/05/220510_Mapo-Tofu_550.jpg",
  },
  {
    item: "Piri Piri Chicken",
    price: 15.0,
    nationality: "Portuguese",
    image:
      "https://realfood.tesco.com/media/images/Piri-piri-chicken-recipe-636x418-577b651f-f318-4eca-b7f0-cdc8d9fb9c4a-0-636x418.jpg",
  },
  {
    item: "Szechuan Hot Pot",
    price: 18.0,
    nationality: "Chinese",
    image:
      "https://cdn-aancj.nitrocdn.com/gCmPdOiQHRSMMdgshrWKlPFYQNLRTYAo/assets/images/optimized/rev-e983c7b/www.thefooddictator.com/wp-content/uploads/2016/01/IMG_8142.jpg",
  },
  {
    item: "Jerk Chicken",
    price: 14.5,
    nationality: "Jamaican",
    image:
      "https://i0.wp.com/evseats.com/wp-content/uploads/2022/06/saucy-jerk-chicken-wings.-1-scaled.jpg?resize=720%2C720&ssl=1",
  },
];

const container = document.getElementById("container");

hotFoods.forEach((spicy) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="hot">
      <img src="${spicy.image}" alt="${spicy.item}">
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
    image:
      "https://patch.com/img/cdn20/users/23562214/20210701/034533/styles/patch_image/public/best-sushi-midtown-nyc-eater___01154521971.jpg",
  },
  {
    item: "Gazpacho",
    price: 8.0,
    nationality: "Spanish",
    image:
      "https://www.allrecipes.com/thmb/d_1S6Av48F5LBfP-Z4W8VTD9U4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222331-Chef-Johns-Gazpacho-ddmfs-4x3-2781-67624a59fa4c4375b9149d06f6c32348.jpg",
  },
  {
    item: "Poke Bowl",
    price: 12.0,
    nationality: "Hawaiian",
    image:
      "https://www.eatingbirdfood.com/wp-content/uploads/2024/05/poke-bowl-process-6.jpg",
  },
  {
    item: "Caprese Salad",
    price: 10.0,
    nationality: "Italian",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F3b432b41ce04c96a08d77befa42b9881a587a436",
  },
  {
    item: "Ceviche",
    price: 14.5,
    nationality: "Peruvian",
    image:
      "https://www.feastingathome.com/wp-content/uploads/2015/04/Ceviche-Recipe.jpg",
  },
  {
    item: "Greek Salad",
    price: 11.0,
    nationality: "Greek",
    image:
      "https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3-720x720.jpeg",
  },
  {
    item: "Chilled Noodle Salad",
    price: 9.75,
    nationality: "Chinese",
    image:
      "https://static01.nyt.com/images/2021/06/18/dining/hm-cold-noodle-salad/merlin_189371982_fe2a424a-73a9-4e56-b4e7-b77f4dfe544c-superJumbo.jpg",
  },
  {
    item: "Fruit Salad",
    price: 7.5,
    nationality: "International",
    image:
      "https://www.momontimeout.com/wp-content/uploads/2021/06/fruit-salad-square-500x500.jpeg",
  },
  {
    item: "Cold Cut Platter",
    price: 16.0,
    nationality: "Various",
    image:
      "https://az727718.vo.msecnd.net/e5184b75632349358c9031c2ef988e6b/images/9981edb797ba478192e3240d3dca9dcc_1080w.jpg",
  },
];

coldFoods.forEach((food) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="cold">
      <img src="${food.image}" alt="${food.item}">
      <p>${food.item} - $${food.price} (${food.nationality})</p>
    </div>`
  );
});
