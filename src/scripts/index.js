const navLinks = document.querySelector(".nav-links");

const onToggleMenu = (e) => {
  e.name = e.name === "menu-outline" ? "close-outline" : "menu-outline";
  navLinks.classList.toggle("top-[8%]");
};

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

// Function for the name on homepage
document.getElementById("bounceIcon").addEventListener("click", function () {
  var textElement = document.getElementById("textAfterClick");
  if (
    textElement.style.display === "none" ||
    textElement.style.display === ""
  ) {
    textElement.style.display = "block";
    setTimeout(function () {
      textElement.style.opacity = 1;
      textElement.style.transform = "translateY(0)";
    }, 10);
  } else {
    textElement.style.opacity = 0;
    textElement.style.transform = "translateY(20px)";
    setTimeout(function () {
      textElement.style.display = "none";
    }, 500);
  }
});
