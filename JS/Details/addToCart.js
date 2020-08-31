document.querySelector('.addToCart').addEventListener('click', ()=>{
    let sizeCheck = document.querySelectorAll('.selected');
    if(sizeCheck.length==0){
        alert('Select a size before adding to cart.');
    }else{
        let itemTitle = document.querySelector('.productTitle').innerText;
        let itemPrice = document.querySelector('.productPrice').innerText;
        let basketPopup = document.querySelector('.basketPopup');
        basketPopup.innerHTML =
        `<div class="container">
            <div class="basketPopupItem">
                <img src="../Images/Details/mainProductImage0.jpg" alt="">
                <div class="basketPopupItemData">
                    <p class="basketItem">${itemTitle}</p>
                    <p class="basktetItemprice">${itemPrice[0]}<span>${itemPrice.slice(1,itemPrice.length)}</span></p>
                </div>
                <p class="basketRemove">+</p>
            </div>
        </div>` + basketPopup.innerHTML;
    }
});