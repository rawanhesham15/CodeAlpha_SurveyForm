
const form = document.querySelector('form');
let arr;
let checkboxes;

function saveData(){
    const fd = new FormData(form);
    
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);
    localStorage.setItem('form1', json);

    arr = [];
    checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0 ; i < checkboxes.length; i++) {
        arr.push(checkboxes[i].value);
    }

    localStorage.setItem("checkboxes", arr);
}

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let stClass = document.querySelector("#class");
let Q11 = document.querySelector("#math");
let Q12 = document.querySelector("#english");
let Q13 = document.querySelector("#spanish");
let Q14 = document.querySelector("#geo");
let Q15 = document.querySelector("#history");
let Q16 = document.querySelector("#science");
let Q2 = document.querySelectorAll(".q2");
let Q3 = document.querySelectorAll(".q3");
let Q4 = document.querySelectorAll(".q4");
let Q5 = document.querySelector("#Q5");
let Q6 = document.querySelectorAll(".q6");

function loadData(){
    var checked = JSON.parse(localStorage.getItem("form1"));
    var checkboxes = localStorage.getItem("checkboxes");
    var arr = checkboxes.split(",");
    console.log(arr)
    console.log(checked);
    name.value = checked.name;
    email.value = checked.email;
    stClass.value  = checked.stClass;
    if(arr.find(element => element === 'math')){
        Q11.checked = true;
    }
    if(arr.find(element => element === 'english')){
        Q12.checked = true;
    }
    if(arr.find(element => element === 'spanish')){
        Q13.checked = true;
    }
    if(arr.find(element => element === 'geo')){
        Q14.checked = true;
    }
    if(arr.find(element => element === 'history')){
        Q15.checked = true;
    }
    if(arr.find(element => element === 'science')){
        Q16.checked = true;
    }

    for(let i of Q2){
        if(i.value === checked.Q2){
            i.checked = true;
        }
    }

    for(let i of Q3){
        if(i.value === checked.Q3){
            i.checked = true;
        }
    }

    for(let i of Q4){
        if(i.value === checked.Q4){
            i.checked = true;
        }
    }
    
    Q5.value = checked.Q5;
    
    for(let i of Q6){
        if(arr.find(element => i.value === element)){
            i.checked = true;
        }
    }
}