const navLinks = document.querySelector(".nav-links");

const onToggleMenu = (e) => {
  e.name = e.name === "menu-outline" ? "close-outline" : "menu-outline";
  navLinks.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Toggle dropdown
  dropdownButton.addEventListener("click", function (event) {
    dropdownMenu.classList.toggle("hidden");
    event.stopPropagation();
  });

  // Hide the menu when clicking outside
  document.addEventListener("click", function () {
    if (!dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("hidden");
    }
  });
});

// Function carousel
const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Function for the categories
const categories = [
  {
    name: "Fruits",
    image: "https://source.unsplash.com/featured/?fruits",
    link: "/fruits.html",
  },
  {
    name: "Dairy",
    image: "https://source.unsplash.com/featured/?milk",
    link: "/dairy.html",
  },
  {
    name: "Vegetables",
    image: "https://source.unsplash.com/featured/?vegetables",
    link: "/vegetables.html",
  },
  {
    name: "Legumes",
    image: "https://source.unsplash.com/featured/?legumes",
    link: "/legumes.html",
  },
  {
    name: "Meat",
    image: "https://source.unsplash.com/featured/?meat",
    link: "/meat.html",
  },
  {
    name: "Poultry",
    image: "https://source.unsplash.com/featured/?poultry",
    link: "/poultry.html",
  },
  {
    name: "Fish",
    image: "https://source.unsplash.com/featured/?fish",
    link: "/fish.html",
  },
  {
    name: "Seafood",
    image: "https://source.unsplash.com/featured/?seafood",
    link: "/seafood.html",
  },
  {
    name: "Bakery",
    image: "https://source.unsplash.com/featured/?bakery",
    link: "/bakery.html",
  },
  {
    name: "Fish",
    image: "https://source.unsplash.com/featured/?fish",
    link: "/fish.html",
  },
];

const initialDisplayCount = 10;

window.addEventListener("DOMContentLoaded", (event) => {
  const grid = document.getElementById("productGrid");
  grid.className = "grid grid-cols-1 md:grid-cols-5 gap-4 md:mx-10 mx-5";

  categories.forEach((category, index) => {
    const card = document.createElement("div");
    card.className = `max-full bg-white rounded overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 ${
      index >= initialDisplayCount ? "hidden" : ""
    } category-card`;
    card.innerHTML = `
      <img class="w-full h-[160px]" src="${category.image}" alt="${category.name}">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${category.name}</div>
      </div>
    `;
    card.addEventListener("click", () => {
      window.location.href = category.link;
    });
    grid.appendChild(card);
  });

  const showMoreBtn = document.getElementById("showMoreBtn");
  showMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".category-card.hidden").forEach((card) => {
      card.classList.remove("hidden");
    });
    showMoreBtn.classList.add("hidden");
  });
});

const farmProducts = [
  { name: "Apples", image: "https://source.unsplash.com/featured/?apples" },
  { name: "Milk", image: "https://source.unsplash.com/featured/?milk" },
  { name: "Eggs", image: "https://source.unsplash.com/featured/?eggs" },
  { name: "Carrots", image: "https://source.unsplash.com/featured/?carrots" },
  { name: "Potatoes", image: "https://source.unsplash.com/featured/?potatoes" },
];

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById(
    "recentlyUpdatedFarmProducts"
  );
  productsContainer.className =
    "grid grid-cols-1 md:grid-cols-5 gap-4 md:mx-10 mx-5";

  farmProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "relative group cursor-pointer";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-[250px] object-cover group-hover:opacity-25 transition-opacity duration-300">
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-xl font-bold">${product.name}</span>
      </div>
    `;

    productsContainer.appendChild(productCard);
  });
});

// Function for the feature premium sellers
const premiumProducts = [
  {
    name: "Premium Apples",
    image: "https://source.unsplash.com/featured/?apples",
  },
  { name: "Organic Milk", image: "https://source.unsplash.com/featured/?milk" },
  {
    name: "Free-range Eggs",
    image: "https://source.unsplash.com/featured/?eggs",
  },
  {
    name: "Heirloom Carrots",
    image: "https://source.unsplash.com/featured/?carrots",
  },
  {
    name: "Sweet Potatoes",
    image: "https://source.unsplash.com/featured/?potatoes",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const premiumContainer = document.getElementById("premiumSellerProducts");
  premiumContainer.className =
    "grid grid-cols-1 md:grid-cols-5 gap-4 md:mx-10 mx-5";

  premiumProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "relative group cursor-pointer bg-black";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-[250px] object-cover group-hover:opacity-25 transition-opacity duration-300">
      <div class="absolute inset-0 flex items-center justify-center text-white opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <span class="text-xl font-bold">${product.name}</span>
      </div>
    `;

    premiumContainer.appendChild(productCard);
  });
});

// Function for the profile page
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  const menuItems = document.querySelectorAll(".menu-item");
  const details = document.getElementById("details");

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Content for each menu item
  const content = {
    overview:
      '<h1 class="text-xl font-bold">Account Overview</h1><div class="max-w-4xl mx-auto p-5"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200"><h2 class="text-lg font-semibold mb-4">Account Details</h2><p class="text-gray-700">Joe Doe <br> joedoe@gmail.com</p></div><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200"><h2 class="text-lg font-semibold mb-4">Address Book</h2><p class="text-gray-700">123, ABC Street, XYZ City, Country,<br> Pincode</p></div><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200"><h2 class="text-lg font-semibold mb-4">Agrix Credit</h2><p class="text-gray-700"> AgrixPo credit balance.</p></div><div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200"><h2 class="text-lg font-semibold mb-4">Newsletter Preferences</h2><p class="text-gray-700">You are currently not subscribed to any of our newsletters.</p></div></div></div>',
    messages:
      '<h1 class="text-xl font-bold">Messages</h1><p>Your messages...</p>',
    orders: '<h1 class="text-xl font-bold">Orders</h1><p>Your orders...</p>',
    saved:
      '<h1 class="text-xl font-bold">Saved Items</h1><p>Your saved items...</p>',
    settings:
      '<h1 class="text-xl font-bold">Settings</h1><p>Your account settings...</p>',
  };

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (!menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
      }

      menuItems.forEach((i) => i.classList.remove("bg-gray-700"));
      this.classList.add("bg-gray-700");

      const target = item.getAttribute("data-target");
      details.innerHTML = content[target];
    });
  });
});
