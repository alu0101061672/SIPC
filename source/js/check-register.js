function checkRegisterForm() {
    debugger;
    if (!document.getElementById('email-field').value.match(/^.{2,}@.{2,}\..{2,}$/))
        return false;
    if (document.getElementById('username-field').value.length == 0)
        return false;
    if (document.getElementById('phone-field').value.length != 9)
        return false;
    if (document.getElementById('age-field').value.length < 18)
        return false;
    return true;
}