let removeItem = document.querySelectorAll('.itemRemove');

for(i=0;i<removeItem.length;i++){
    removeItem[i].addEventListener('click', function(e){
        this.parentElement.parentElement.innerHTML = '';
    });
}