//HERO CAROUSEL
let productDisplayImage = document.querySelector('.mainProductImage');
let productImages = document.querySelectorAll('.miniatureImages img');

//selection via squares
for(let i=0;i<productImages.length;i++){
    productImages[i].addEventListener('click', ()=>{
        if(!productImages[i].className.includes('active')){
            for(let j=0;j<productImages.length;j++){
                productImages[j].classList.remove('active');
            }
            productDisplayImage.src = `../Images/Details/mainProductImage${i}.jpg`;
            productImages[i].classList.add('active');
        }
    });
}