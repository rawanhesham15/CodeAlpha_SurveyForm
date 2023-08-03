const hours = document.querySelector('#hours');
const hoursRange = document.querySelector('#hoursRange');

hoursRange.addEventListener('input', function(){
    hours.innerHTML = hoursRange.value;
});
