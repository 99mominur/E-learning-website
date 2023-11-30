// navbar  bg change on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("open")) {
      faq.classList.toggle("open");
      const icon = faq.querySelector(".faq__icon i");
      icon.className = "fa-solid fa-plus";
      return;
    }
    const open = faq.parentNode.querySelectorAll(".open");
    open.forEach((opn) => {
      opn.classList.toggle("open");
      const icon = opn.querySelector(".faq__icon i");
      icon.className = "fa-solid fa-plus";
    });
    faq.classList.toggle("open");
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// active page fun learning, brain poked

// const url = window.location.href;
// let hostname = new URL(url).pathname;
// if (hostname.includes("index.html")) {
//   const index = document.querySelector(".index__html");
//   index.classList.add("active");
// } else if (hostname.includes("about.html")) {
//   const index = document.querySelector(".about__html");
//   index.classList.add("active");
// } else if (hostname.includes("courses.html")) {
//   const index = document.querySelector(".courses__html");
//   index.classList.add("active");
// } else if (hostname.includes("contact.html")) {
//   const index = document.querySelector(".contact__html");
//   index.classList.add("active");
// }

//open / hide nav button

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});
