const allElems = document.querySelectorAll(".elem");
const allPages = document.querySelectorAll(".page");
const allPagesBackBtn = document.querySelectorAll(".page .back");

allElems.forEach((elem) => {
  elem.addEventListener("click", () => {
    allPages[elem.id].style.display = "block";
  });
});

allPagesBackBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    allPages[btn.id].style.display = "none";
  });
});
