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
