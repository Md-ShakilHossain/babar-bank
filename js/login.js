document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    if(email === 'baaper@sontaan.com' && password === 'secret'){
        console.log('Valid User');
    }
    else{
        alert('Wrong Email or Password');
    }
})