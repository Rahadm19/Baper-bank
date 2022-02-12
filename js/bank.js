document.getElementById('submit-button').addEventListener('click', function (){
    const emailField = document.getElementById('user-mail');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
        console.log('its valid password');
        window.location.href = 'banking.html';
    }
})