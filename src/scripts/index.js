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
    event.stopPropagation(); // Prevent the click from being detected by the document listener
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

// Function for the login menu
const roleButtons = document.querySelectorAll(".role-btn");
roleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const role = this.getAttribute("data-role");
    document.getElementById("loginTitle").innerText = `${role} Login`;
    document.getElementById("loginForm").classList.remove("hidden");

    roleButtons.forEach((btn) => {
      if (btn === this) {
        btn.classList.add("bg-primary-light", "text-white");
        btn.classList.remove("bg-white", "text-[#384E46]");
      } else {
        btn.classList.remove("bg-orange-500", "text-white");
        btn.classList.add("bg-white", "text-[#384E46]");
      }
    });
  });
});
