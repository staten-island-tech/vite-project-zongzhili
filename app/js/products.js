const foodProducts = [
  {
    id: "asian",
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
    id: "asian",
    item: "Vindaloo Curry",
    price: 14.0,
    nationality: "Indian",
    image:
      "https://niksharmacooks.com/wp-content/uploads/2022/12/Chicken-VindalooDSC_6147.jpg",
  },
  {
    id: "asian",
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
    id: "asian",
    item: "Mapo Tofu",
    price: 10.25,
    nationality: "Chinese",
    image:
      "https://omnivorescookbook.com/wp-content/uploads/2022/05/220510_Mapo-Tofu_550.jpg",
  },
  {
    item: "Tacos",
    price: 15.0,
    nationality: "Mexican",
    image:
      "https://www.allrecipes.com/thmb/qWvc3DAtgp4sVE40nPKQiTW0OoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/70935-taqueria-style-tacos-mfs-1x2-40-691efd4df7f14cdd8280ca9d7a62692e.jpg",
  },
  {
    id: "asian",
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
  {
    id: "salad",
    item: "Caesar Salad",
    price: 9.5,
    nationality: "Italian",
    image:
      "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
  },
  {
    id: "asian",
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
    id: "salad",
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
    id: "salad",
    item: "Greek Salad",
    price: 11.0,
    nationality: "Greek",
    image:
      "https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3-720x720.jpeg",
  },
  {
    id: "asian",
    item: "Pho",
    price: 9.75,
    nationality: "Vietnam",
    image:
      "https://www.allrecipes.com/thmb/EbqrYyFsDjrCM3KTN7fUHr78Z84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57354-Beef-Pho-DDMFS-3x4-0615-49503be6698c4771a88400caa1c45795.jpg",
  },
  {
    id: "salad",
    item: "Fruit Salad",
    price: 7.5,
    nationality: "Global",
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
export { foodProducts };
