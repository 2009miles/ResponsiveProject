//MULTICAROUSEL
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

let inspirationImages = document.querySelectorAll('.multiCarousel img.inspCarousel');
function indexFinder(){
    for(let i=0;i<inspirationImages.length;i++){
        if(inspirationImages[i].className.includes('marker')){
            return i;
        }
    }
}

document.querySelector('#inspBack').addEventListener('click', ()=>{
    markerIndex = indexFinder();
    windowWidth = getWidth();

    if(windowWidth <= 1024 && windowWidth>840){
        if(markerIndex<6){
            inspirationImages[markerIndex].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex+1].classList.add('marker');
            inspirationImages[markerIndex+4].classList.remove('inactive');
            }
    }else if(windowWidth <= 840 && windowWidth>660){
        if(markerIndex<7){
            inspirationImages[markerIndex].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex+1].classList.add('marker');
            inspirationImages[markerIndex+3].classList.remove('inactive');
        }
    }else if(windowWidth <= 660 && windowWidth>470){
        if(markerIndex<8){
            inspirationImages[markerIndex].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex+1].classList.add('marker');
            inspirationImages[markerIndex+2].classList.remove('inactive');
        }
    }else if(windowWidth <= 470 && windowWidth>0){
        if(markerIndex<9){
            inspirationImages[markerIndex].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex+1].classList.add('marker');
            inspirationImages[markerIndex+1].classList.remove('inactive');
        }
    }else{
        if(markerIndex+5<inspirationImages.length){
        inspirationImages[markerIndex].classList.add('inactive');
        inspirationImages[markerIndex].classList.remove('marker');
        inspirationImages[markerIndex+1].classList.add('marker');
        inspirationImages[markerIndex+5].classList.remove('inactive');
        }
    }
});    

document.querySelector('#inspNext').addEventListener('click', ()=>{
    markerIndex = indexFinder();
    windowWidth = getWidth();

    if(windowWidth <= 1024 && windowWidth>840){
        if(markerIndex>=1){
            inspirationImages[markerIndex+3].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex-1].classList.add('marker');
            inspirationImages[markerIndex-1].classList.remove('inactive');
        }
    }else if(windowWidth <= 840 && windowWidth>660){
        if(markerIndex>=1){
            inspirationImages[markerIndex+2].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex-1].classList.add('marker');
            inspirationImages[markerIndex-1].classList.remove('inactive');
        }
    }else if(windowWidth <= 660 && windowWidth>470){
        if(markerIndex>=1){
            inspirationImages[markerIndex+1].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex-1].classList.add('marker');
            inspirationImages[markerIndex-1].classList.remove('inactive');
        }
    }else if(windowWidth <= 470 && windowWidth > 0){
        if(markerIndex>=1){
            inspirationImages[markerIndex].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex-1].classList.add('marker');
            inspirationImages[markerIndex-1].classList.remove('inactive');
        }
    }else{
        if(markerIndex>=1){
            inspirationImages[markerIndex+4].classList.add('inactive');
            inspirationImages[markerIndex].classList.remove('marker');
            inspirationImages[markerIndex-1].classList.add('marker');
            inspirationImages[markerIndex-1].classList.remove('inactive');
        }
    }
    
});