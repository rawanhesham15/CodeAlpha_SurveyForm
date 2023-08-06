const form = document.querySelector('form');
let arr;
let checkboxes;

function saveData(){
    const fd = new FormData(form);
    
    const obj = Object.fromEntries(fd);
    const json = JSON.stringify(obj);
    localStorage.setItem('form3', json);
}

const q17 = document.querySelectorAll(".q17");
const q18 = document.querySelectorAll(".q18");
const q19 = document.querySelectorAll(".q19");
const q20 = document.querySelectorAll(".q20");
const q21 = document.querySelectorAll(".q21");
const q22 = document.querySelectorAll(".q22");

function loadData(){
    var checked = JSON.parse(localStorage.getItem("form3"));
    console.log(checked);
    for(let i of q17){
        if(i.value === checked.Q17){
            i.checked = true;
        }
    }

    for(let i of q18){
        if(i.value === checked.Q18){
            i.checked = true;
        }
    }

    for(let i of q19){
        if(i.value === checked.Q19){
            i.checked = true;
        }
    }

    for(let i of q20){
        if(i.value === checked.Q20){
            i.checked = true;
        }
    }

    for(let i of q21){
        if(i.value === checked.Q21){
            i.checked = true;
        }
    }

    for(let i of q22){
        if(i.value === checked.Q22){
            i.checked = true;
        }
    }
}