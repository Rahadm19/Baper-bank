function getInputValue(fieldId){
    const inputFieldId = document.getElementById(fieldId);
    const inputFieldText = inputFieldId.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputFieldId.value = '';
    return inputFieldValue;
}
function upadeteTotal (fieldId , amount){
    const topFieldId = document.getElementById(fieldId);
    const fieldIdText = topFieldId.innerText;
    const fieldIdValue = parseFloat(fieldIdText);
   const newTotal = fieldIdValue + amount;
   topFieldId.innerText = newTotal;
}
// deposit button working system 

document.getElementById('diposit-button').addEventListener('click', function(){
    const depositeInputValue = getInputValue('deposit-input');
    if(depositeInputValue<0){
        swal("Your Have Not enough Balance", "Please deposite balance and try again!")
    }
    else if(isNaN(depositeInputValue)){
        swal("Your Have Not enough Balance", "Please deposite balance and try again!")
    }
    else{
        upadeteTotal('diposit',  depositeInputValue);
        upadeteTotal('balance',depositeInputValue);
    }
})

// withdraw button working system 

document.getElementById('withdra-button').addEventListener('click', function(){
    const withdrawInputValue = getInputValue('withdraw-input');
    const withdraw = document.getElementById('balance');
    const withdrawText = withdraw.innerText;
    const withdrawValue = parseFloat(withdrawText);
    if(withdrawValue<withdrawInputValue){
        swal("Your Have Not enough Balance", "Please deposite balance and try again!")
       
    }
    else if(isNaN(withdrawInputValue)){
        swal("Input a Valid number", " Or Please deposite balance and try again!")
    }
    
    else{
        upadeteTotal("withdraw",withdrawInputValue);
        const totalBalance = withdrawValue - withdrawInputValue;
        withdraw.innerText = totalBalance;
        swal({
            title: "Withdraw Succes",
            text: "Click ok and see the dashboard",
            icon: "success",
            button: "Ok",
          });
    }
    
})
