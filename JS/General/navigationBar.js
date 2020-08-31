//MOBILE MENU
document.querySelector('#mobileMenuButton').addEventListener('click', ()=>{
    let leftNav = document.querySelector('.leftNavigation');
    let heroContent = document.querySelector('.heroContent');
    if(leftNav.className.includes('active')){
        leftNav.classList.remove('active');
        heroContent.classList.remove('inactive');
    }else{
        leftNav.classList.add('active');
        heroContent.classList.add('inactive');
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