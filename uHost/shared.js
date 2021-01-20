var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
var onClickNO = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

console.log(selectPlanButton);
// console.dir(backdrop.style['background-image']);
// console.dir(backdrop.style.backgroundImage);  //same thing both method of declaration

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}
if (onClickNO) {
    onClickNO.addEventListener("click", displayFunction);
}

backdrop.addEventListener("click", () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    displayFunction();
});

function displayFunction() {
//   modal.style.display = "none";
//   backdrop.style.display = "none";

if (modal) {
    modal.classList.remove('open');
}
backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

