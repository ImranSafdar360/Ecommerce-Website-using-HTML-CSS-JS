const navbar = () => {
  const nav = document.querySelector("#nav-links");
  const bar = document.querySelector("#menu");
  const cross = document.querySelector("#close");
  bar.addEventListener("click", function () {
    nav.classList.add("open");
  });
  cross.addEventListener("click", function () {
    nav.classList.remove("open");
  });
};
navbar();

const Products = [
  {
    image: "./img/products/f1.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$80",
  },
  {
    image: "./img/products/f2.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$50",
  },
  {
    image: "./img/products/f3.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$70",
  },
  {
    image: "./img/products/f4.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$60",
  },
  {
    image: "./img/products/f5.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$85",
  },
  {
    image: "./img/products/f6.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$65",
  },
  {
    image: "./img/products/f7.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$90",
  },
  {
    image: "./img/products/f8.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$100",
  },
];
const newArrivals = [
  {
    image: "./img/products/n1.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$80",
  },
  {
    image: "./img/products/n2.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$50",
  },
  {
    image: "./img/products/n3.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$70",
  },
  {
    image: "./img/products/n4.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$60",
  },
  {
    image: "./img/products/n5.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$85",
  },
  {
    image: "./img/products/n6.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$65",
  },
  {
    image: "./img/products/n7.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$90",
  },
  {
    image: "./img/products/n8.jpg",
    subtitle: "adidas",
    title: "Cartoon Astrnauts T-shirts",
    price: "$100",
  },
]

const showTheProducts = () => {
  var clutter = "";
  Products.forEach(function(product,index){
    clutter += `
    <div class="p-card">
                    <img src="${product.image}" alt="">
                    <div class="card-content">
                        <span>${product.subtitle}</span>
                        <h6>${product.title}</h6>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <h6 class="price">${product.price}</h6>
                    </div>
                    <a data-index="${index}" href="#"><i data-index="${index}" class="bi bi-cart-plus cart"></i></a>
                </div>
    `;
  });
  document.querySelector("#product-container").innerHTML = clutter;
};
const showTheArrivals = () => {
  var clutter = "";
  newArrivals.forEach(function(pro,index){
    clutter += `
    <div class="p-card">
                    <img src="${pro.image}" alt="">
                    <div class="card-content">
                        <span>${pro.subtitle}</span>
                        <h6>${pro.title}</h6>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <h6 class="price">${pro.price}</h6>
                    </div>
                    <a data-index="${index}" href="#"><i data-index="${index}" class="bi bi-cart-plus cart"></i></a>
                </div>
    `;
  });
  document.querySelector("#product-container2").innerHTML = clutter;
};


showTheProducts();
showTheArrivals();