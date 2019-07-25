var onebtn = document.getElementById('calc-one');
var twobtn = document.getElementById('calc-two');
var threebtn = document.getElementById('calc-three');
var fourbtn = document.getElementById('calc-four');
var fivebtn = document.getElementById('calc-five');
var sixbtn = document.getElementById('calc-six');
var sevenbtn = document.getElementById('calc-seven');
var eightbtn = document.getElementById('calc-eight');
var ninebtn = document.getElementById('calc-nine');
var zerobtn = document.getElementById('calc-zero');

var decimalbtn = document.getElementById('calc-decimal');
var clearbtn = document.getElementById('calc-clear');
var backspacebtn = document.getElementById('calc-backspace');
var displayvalelement = document.getElementById('calc-display-val');

var calcnumbtn = document.getElementsByClassName('calc-btn-num');
var calcoperatorbtn = document.getElementsByClassName('calc-btn-operator');


var displayval = '0';
var pendingval;
var evalstringarray = [];




clearbtn.onclick = () => {
    displayval = '0';
    displayvalelement.innerHTML = displayval;
}


backspacebtn.onclick = () => {
    let lengthofdisplayval = displayval.length;
    displayval = displayval.slice(0, lengthofdisplayval - 1);
    if (displayval === '')
        displayval = '0';
    displayvalelement.innerHTML = displayval;
}



decimalbtn.onclick = () => {
    if (!displayval.includes('.'))  
        displayval += '.';
    displayvalelement.innerHTML = displayval;
}



var performoperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case "+":
            pendingval = displayval;
            displayval = '0';
            displayvalelement.innerText = displayval;
            evalstringarray.push(pendingval);
            evalstringarray.push('+');
            break;
        case "-":
            pendingval = displayval;
            displayval = '0';
            displayvalelement.innerText = displayval;
            evalstringarray.push(pendingval);
            evalstringarray.push('-');
            break;

        case "=":
            evalstringarray.push(displayval);
            var evaluation = eval(evalstringarray.join(''));
            displayval = evaluation + '';
            displayvalelement.innerText = displayval;
            evalstringarray = [];
            break;
        case "*":
            pendingval = displayval;
            displayval = '0';
            displayvalelement.innerText = displayval;
            evalstringarray.push(pendingval);
            evalstringarray.push('*');
            break;
        case "%":
            pendingval = displayval;
            displayval = '0';
            displayvalelement.innerText = displayval;
            evalstringarray.push(pendingval);
            evalstringarray.push('/');
            break;
    }

}


var updatedisplayval = (clickObj) => {
    var btntext = clickObj.target.innerText;
    if (displayval === '0')
        displayval = '';
    displayval += btntext;
    displayvalelement.innerText = displayval;

}

for (let i = 0; i < calcnumbtn.length; i++) {
    calcnumbtn[i].addEventListener('click', updatedisplayval, false);
}

for (let i = 0; i < calcoperatorbtn.length; i++) {

    calcoperatorbtn[i].addEventListener('click', performoperation, false);

}
