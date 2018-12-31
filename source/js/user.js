function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
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
    // [END createwithemail]
}

function goToUserPage() {
    location.href = 'user.html';
}

function handleLogUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        location.href = "user.html";
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}
document.getElementById('quickstart-sign-up').addEventListener('click', handleLogUp, false);

var currentUser;

firebase.auth().onAuthStateChanged(function (user) {
    currentUser = user;
});

document.getElementById('user-link').addEventListener('click', function(){
    if(currentUser){
        location.href = "user.html";
    } else {
        alert('No user authenticated yet.');
    }
});
document.getElementById('user-mobile-link').addEventListener('click', function(){
    if(currentUser){
        location.href = "user.html";
    } else {
        alert('No user authenticated yet.');
    }
});