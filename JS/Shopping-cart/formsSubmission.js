
let submissionButton = document.querySelector('.orderConfirmationInput');

submissionButton.addEventListener('click', ()=>{
    document.querySelector(".shippingInformationForm").submit();
    document.querySelector(".paymentInformationForm").submit();
})

document.onsubmit(alert('form submitted'));