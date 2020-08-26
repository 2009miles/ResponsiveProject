//SIGN-UP VALIDATION
document.querySelector('#signUpButton').addEventListener('click', ()=>{
    let input = document.querySelector('#signUpInput').value;
    if(input.includes('@')){
        document.querySelector('#signUpFeedbackThanks').classList.remove('inactive');
        document.querySelector('#signUpInput').classList.add('inactive');
        document.querySelector('#signUpButton').classList.add('inactive');
        document.querySelector('#signUpFeedbackWarning').classList.add('inactive');
    }else{
        document.querySelector('#signUpFeedbackWarning').classList.remove('inactive');
        console.log('here');
    }
});