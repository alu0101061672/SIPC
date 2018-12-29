function addUser() {
    var email = document.getElementById('email-field').value;
    var password = document.getElementById('password-field').value;
    var age = parseInt(document.getElementById('age-field').value);
    var address = document.getElementById('address-field').value;
    var phone = parseInt(document.getElementById('phone-field').value);
    var gender = "";
    if (document.getElementById('customRadio').checked) {
        gender = "Male";
    } else {
        gender = "Female";
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        firebase.database().ref("users").push().set({
            email: email,
            age: age,
            address: address,
            phone: phone,
            gender: gender
        });
        document.getElementById('register-form').submit();
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
}

function checkRegisterForm() {
    if (!document.getElementById('email-field').value.match(/^.{2,}@.{2,}\..{2,}$/))
        return false;
    if (document.getElementById('password-field').value.length < 5)
        return false;
    if (document.getElementById('phone-field').value.length != 9)
        return false;
    if (parseInt(document.getElementById('age-field').value) < 18)
        return false;
        
    addUser();
}