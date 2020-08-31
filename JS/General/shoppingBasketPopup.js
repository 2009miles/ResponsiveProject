function calculateSubtotal(pricesArray){
    let allPrices = [];

    for(i=0;i<pricesArray.length;i++){
        let parsedPrice = parseFloat(pricesArray[i].innerText.replace(/,/g, '.'));
        allPrices.push(parsedPrice);
    }

    totalPrice = allPrices.reduce((a, b) => a + b, 0);
    return totalPrice;
}

let basketClick = document.querySelector('.basket a');
let basket = document.querySelector('.basket');

basketClick.addEventListener('click', ()=>{
    if(basket.className.includes('toggled')){
        basket.querySelector('.basketPopupContainer').classList.add('inactive');
        basket.classList.remove('toggled');
    }else{
        basket.querySelector('.basketPopupContainer').classList.remove('inactive');
        basket.classList.add('toggled');
    }
    let pricesInCart = document.querySelectorAll('.basktetItemprice span');
    let subtotalPrice = calculateSubtotal(pricesInCart);
    document.querySelector('.basketPopupSubtotal span').innerText = `€${subtotalPrice}`;
});