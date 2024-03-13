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
