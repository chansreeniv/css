var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var selectPlanButton = document.querySelectorAll('.plan button')

console.log(selectPlanButton);

for(var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

var onClickNO = document.querySelector('.modal__action--negative')

onClickNO.addEventListener('click', displayFunction);
backdrop.addEventListener('click', displayFunction);

function displayFunction(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

