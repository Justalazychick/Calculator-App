const currentOperand = document.querySelector('.current-operand');
const operator = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('.number');
const allClear = document.querySelector('.all-clear');
const equals = document.querySelector('.equals');

// Append number to Display
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentOperand.innerText += button.innerText;
        });
    });


