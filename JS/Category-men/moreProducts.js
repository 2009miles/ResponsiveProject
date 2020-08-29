document.querySelector('.moreProductsButton').addEventListener('click', ()=>{
    document.querySelector('.moreProducts').classList.remove('productSpacing');
    document.querySelector('.moreProductsButton').classList.add('inactive');
    document.querySelector('.additionalProducts').classList.remove('inactive');
});