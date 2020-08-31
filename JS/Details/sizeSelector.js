let sizes = document.querySelectorAll('.productSizing ul li');

for(i=0;i<sizes.length;i++){
    sizes[i].addEventListener('click', function(e){
        for(j=0;j<sizes.length;j++){
            sizes[j].classList.remove('selected');
        }
        this.classList.add('selected');
    });
}