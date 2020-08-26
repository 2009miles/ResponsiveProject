//HERO CAROUSEL
let hero = document.querySelector('.hero');
let squares = document.querySelectorAll('.imageSelectionSquares li');

//selection via squares
for(let i=0;i<squares.length;i++){
    squares[i].addEventListener('click', ()=>{
        if(!squares[i].className.includes('active')){
            for(let j=0;j<squares.length;j++){
                squares[j].classList.remove('active');
            }
            hero.style.backgroundImage = `url(../Images/Hero/heroBackground${i}.jpg)`;
            squares[i].classList.add('active');
        }
    });
}

//selection via back arrow
let back = document.querySelector('#heroBack');
back.addEventListener('click', ()=>{
    let activeRemoved = false;
    for(i=0;i<squares.length && activeRemoved == false;i++){
        if(squares[i].className.includes('active')){
            squares[i].classList.remove('active');
            activeRemoved = true;
            if(i > 0){
                hero.style.backgroundImage = `url(../Images/Hero/heroBackground${i-1}.jpg)`;
                squares[i-1].classList.add('active');
            }else{
                hero.style.backgroundImage = `url(../Images/Hero/heroBackground${squares.length-1}.jpg)`;
                squares[squares.length-1].classList.add('active');
            }
        }
    }
});

//selection via next arrow
let next = document.querySelector('#heroNext');
next.addEventListener('click', ()=>{
    let activeRemoved = false;
    for(i=0;i<squares.length && activeRemoved == false;i++){
        if(squares[i].className.includes('active')){
            squares[i].classList.remove('active');
            activeRemoved = true;
            if(i+1 < squares.length){
                hero.style.backgroundImage = `url(../Images/Hero/heroBackground${i+1}.jpg)`;
                squares[i+1].classList.add('active');
            }else{
                hero.style.backgroundImage = `url(../Images/Hero/heroBackground0.jpg)`;
                squares[0].classList.add('active');
            }
        }
    }
});