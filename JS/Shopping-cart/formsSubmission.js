function submitForm(event){
    event.preventDefault()
    let formValues = [];
    let shippingSelection = document.querySelector('.shippingDeliveryMethod');
    let shippingOption = shippingSelection.options[shippingSelection.selectedIndex].text;
    formValues.push(["shippingDeliveryMethod",shippingOption]);

    formOneInputs = document.querySelector('.shippingInformationForm').querySelectorAll('input');
    for(i=0; i<formOneInputs.length; i++){
        let name = formOneInputs[i].name;
        let value = formOneInputs[i].value;
        formValues.push([name,value]);
    }
    let paymentSelection = document.querySelector('.paymentMethod');
    let paymentOption = paymentSelection.options[paymentSelection.selectedIndex].text;
    formValues.push(["paymentMethod",paymentOption]);

    

    if(formValidation() == true){
        document.querySelector('.orderConfirmationInput').classList.add('inactive');
        document.querySelector('#formFeedbackWarning').classList.add('inactive');
        document.querySelector('#formFeedback').classList.remove('inactive');
    }else{
        document.querySelector('#formFeedbackWarning').classList.remove('inactive');
    }
}

function formValidation(){
    let validinputs = 0;
    let shippingSelection = document.querySelector('.shippingDeliveryMethod');
    if(shippingSelection.options[shippingSelection.selectedIndex].text == "Select delivery method"){
        shippingSelection.classList.add('invalid');
    }else{
        shippingSelection.classList.remove('invalid');
        validinputs++;
    }

    formOneInputs = document.querySelector('.shippingInformationForm').querySelectorAll('input');
    for(j=0; j<formOneInputs.length; j++){
        if(formOneInputs[j].value.length == 0 && formOneInputs[j].className.includes('required')){
            formOneInputs[j].classList.add('invalid');
        }else{
            formOneInputs[j].classList.remove('invalid');
            validinputs++;
        }
    }

    email = document.querySelector('.shippingEmail');
    if(!email.value.includes('@')){
        email.classList.add('invalid');
    }else{
        email.classList.remove('invalid');
    }

    let paymentSelection = document.querySelector('.paymentMethod');
    if(paymentSelection.options[paymentSelection.selectedIndex].text == "Select payment method"){
        paymentSelection.classList.add('invalid');
    }else{
        paymentSelection.classList.remove('invalid');
        validinputs++;
    }

    if(validinputs==11){
        return true
    }else{
        return false
    }
}