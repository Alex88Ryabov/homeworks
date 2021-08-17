var select = document.querySelector('.select-selected');
var options = document.querySelectorAll('.option');
var optionList = document.querySelector('ul');
var triangle = document.querySelector('.triangle');
var triangleActive = document.querySelector('.triangle-active');

select.onclick = function () {
    optionList.classList.toggle('option-active');
    for (let option of options) {
        option.onclick = function () {
            option.classList.toggle('active');
            select.textContent = option.textContent;
            optionList.classList.remove('option-active');
        }
    }
}

