"use strict";

window.onload = init;

//define init;
function init()
{
    //get add btn id
    let btnAddId = document.getElementById("Add");
    let btnSubId = document.getElementById("Subtract");
    let btnMulId = document.getElementById("Multiply"); 

    btnAddId.onclick = onAddBtnClicked;
    btnSubId.onclick = onSubBtnClicked;
    btnMulId.onclick = onMulBtnClicked;
}
function onAddBtnClicked(){
    //get 1st and 2nd sumber
    let Num1Id = document.getElementById("num1");
    let Num2Id = document.getElementById("num2");

    //get id of answer input box
    let AnsId = document.getElementById("ans");

    let number1 = Number(Num1Id.value);
    let number2 = Number(Num2Id.value);
     
    // add 2 numbers
    let sum = number1 + number2;
  
    AnsId.value = sum;
}
// Subtraction
function onSubBtnClicked(){
    //get 1st and 2nd sumber
    let Num1Id = document.getElementById("num1");
    let Num2Id = document.getElementById("num2");

    //get id of answer input box
    let AnsId = document.getElementById("ans");

    let number1 = Number(Num1Id.value);
    let number2 = Number(Num2Id.value);
     
    // add 2 numbers
    let Diff = number1 - number2;
  
    AnsId.value = Diff;
}

//multiply
function onMulBtnClicked(){
    //get 1st and 2nd sumber
    let Num1Id = document.getElementById("num1");
    let Num2Id = document.getElementById("num2");

    //get id of answer input box
    let AnsId = document.getElementById("ans");

    let number1 = Number(Num1Id.value);
    let number2 = Number(Num2Id.value);
     
    // add 2 numbers
    let product = number1 * number2;
  
    AnsId.value = product;
}