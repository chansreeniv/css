var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
var onClickNO = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta")

console.log(selectPlanButton);
// console.dir(backdrop.style['background-image']);
// console.dir(backdrop.style.backgroundImage);  //same thing both method of declaration

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
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
setTimeout(() => {
  backdrop.style.display = "none";
}, 200);
}

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add('open');
    }, 10);
})

ctaButton.addEventListener('animationstart', (event) => {
  console.log('Animation Started', event);
});

ctaButton.addEventListener('animationend', (event) => {
  console.log('Animation Ended', event);
});

ctaButton.addEventListener('animationiteration', (event) => {
  console.log('Animation iteration', event);
});