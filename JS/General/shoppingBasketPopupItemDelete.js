let basketRemove = document.querySelectorAll('.basketRemove');
let basketItems = document.querySelectorAll('.basketPopupItem');
for(i=0;i<basketRemove.length;i++){
    basketRemove[i].addEventListener('click', function(e){
        this.parentElement.parentElement.innerHTML = '';
    });
}