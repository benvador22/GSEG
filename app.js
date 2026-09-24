const tab = document.querySelector(".tab");

window.addEventListener("scroll", (event) => {
  const top = window.scrollY;

  if (tab.offsetTop - top < 550) {
    tab.classList.add("active");
  } else {
    tab.classList.remove("active");
  }
});
