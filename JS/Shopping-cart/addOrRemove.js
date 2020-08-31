let add = document.querySelectorAll('.qtyAdd');
let remove = document.querySelectorAll('.qtyRemove');

add.forEach(add => add.addEventListener('click', function(e){
    currentValue = Number(add.parentElement.parentElement.querySelector('.currentQty').innerText);
    add.parentElement.parentElement.querySelector('.currentQty').innerText = `${currentValue + 1}`;
}));

remove.forEach(remove => remove.addEventListener('click', function(e){
    currentValue = Number(remove.parentElement.parentElement.querySelector('.currentQty').innerText);
    if(currentValue===1){
        remove.parentElement.parentElement.parentElement.parentElement.innerHTML = '';
    }else{
        remove.parentElement.parentElement.querySelector('.currentQty').innerText = `${currentValue - 1}`;
    }
}));