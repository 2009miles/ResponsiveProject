let rightNavigation = document.querySelector('.rightNavigation');
let logInPrompt = document.querySelector('.user').querySelector('p');
let logOut = document.querySelector('.user').querySelectorAll('p')[1];
let logOutPrompt = document.querySelector('.user').querySelectorAll('p')[1].querySelector('a');
let basketPopup = document.querySelector('.basketPopup');

document.querySelector('.user').addEventListener('click', ()=>{
    let loggedOut = rightNavigation.className.includes('loggedOut');
    if(loggedOut){
        rightNavigation.classList.remove('loggedOut');
        rightNavigation.classList.add('loggedIn');
        logInPrompt.classList.add('inactive');
        logOut.classList.remove('inactive');
        basketPopup.classList.remove('loggedOut');
        basketPopup.classList.add('loggedIn');
    }else if(!loggedOut){
        rightNavigation.classList.remove('loggedIn');
        rightNavigation.classList.add('loggedOut');
        logInPrompt.classList.remove('inactive');
        logOut.classList.add('inactive');
        basketPopup.classList.remove('loggedIn');
        basketPopup.classList.add('loggedOut');
    }
});