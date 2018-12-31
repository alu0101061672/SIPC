firebase.auth().onAuthStateChanged(function (user) {
    debugger;
    if (user != null) {
        firebase.database().ref("users").orderByChild("email").equalTo(user.email).on("child_added", function (snapshot, prevChildKey) {
            debugger;
            document.getElementById('email-field').innerText = snapshot.child("email").val();
            document.getElementById('age-field').innerText = snapshot.child("age").val();
            document.getElementById('address-field').innerText = snapshot.child("address").val();
            document.getElementById('phone-field').innerText = snapshot.child("phone").val();
            document.getElementById('gender-field').innerText = snapshot.child("gender").val();
        });
    }
});