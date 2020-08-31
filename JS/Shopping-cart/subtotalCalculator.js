document.addEventListener('DOMContentLoaded', function() {
    let pricesInBag = document.querySelectorAll('.itemPrice');
    let prices = []
    for(i=0;i<pricesInBag.length;i++){
        prices.push(Number(pricesInBag[i].innerText.slice(1, pricesInBag[i].innerText.length).replace(/,/g, '.')))
    }

    totalPrice = prices.reduce((a, b) => a + b, 0);

    document.querySelector('.totalPrice span').innerText = `${totalPrice}`

 }, false);