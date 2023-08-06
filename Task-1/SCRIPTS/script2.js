const hours = document.querySelector('#hours');
const hoursRange = document.querySelector('#Q7');

hoursRange.addEventListener('input', function(){
    hours.innerHTML = hoursRange.value;
});


const form = document.querySelector('form');
let arr;
let checkboxes;

function saveData(){
    const fd = new FormData(form);
    
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);
    localStorage.setItem('form2', json);

    arr = [];
    checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0 ; i < checkboxes.length; i++) {
        arr.push(checkboxes[i].value);
    }

    localStorage.setItem("checkboxes2", arr);
}

const q7 = document.querySelector("#Q7");
const q8 = document.querySelector("#Q8");
const q9 = document.querySelector("#Q9");
const q10 = document.querySelector("#Q10");
const q11 = document.querySelector("#Q11");
const q12 = document.querySelector("#Q12");
const q14 = document.querySelector("#Q14");
const q15 = document.querySelector("#Q15");
const q13 = document.querySelectorAll(".q13");
const q16 = document.querySelectorAll(".q16");

function loadData(){
    var checked = JSON.parse(localStorage.getItem("form2"));
    var checkboxes = localStorage.getItem("checkboxes2");
    var arr = checkboxes.split(",");
    console.log(arr)
    console.log(checked);
    q7.value = checked.Q7;
    hours.innerHTML = hoursRange.value;
    q8.value = checked.Q8;
    q9.value = checked.Q9;
    q10.value = checked.Q10;
    q11.value = checked.Q11;
    q12.value = checked.Q12;
    q14.value = checked.Q14;
    q15.value = checked.Q15;

    for(let i of q13){
        if(arr.find(element => i.value === element)){
            i.checked = true;
        }
    }

    for(let i of q16){
        if(i.value === checked.Q16){
            i.checked = true;
        }
    }
}