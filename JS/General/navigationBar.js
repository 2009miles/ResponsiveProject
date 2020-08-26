//MOBILE MENU
document.querySelector('#mobileMenuButton').addEventListener('click', ()=>{
    let leftNav = document.querySelector('.leftNavigation');
    if(leftNav.className.includes('active')){
        leftNav.classList.remove('active');
    }else{
        leftNav.classList.add('active');
    }
});

//SEARCH BAR
document.querySelector('.searchIcon').addEventListener('click', ()=>{
    let searchBar = document.querySelector('.searchBar');
    if(searchBar.className.includes('active')){
        searchBar.classList.remove('active');
    }else{
        searchBar.classList.add('active');
    }
});