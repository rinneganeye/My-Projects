function validateForm() {
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const conpassword = document.getElementById('conpassword').value

    // Name
    if (name.length == "") {
        document.getElementById("usererror").innerHTML = "** Please fill this area **"
        return false
    }
    if (name.length <=2) {
        document.getElementById("usererror").innerHTML = "** Name cannot be this short **"
        return false
    }
    if (name.length >18) {
        document.getElementById("usererror").innerHTML = "** Name cannot be this big **"
        return false
    }

    // Phone
    if (phone.length == "")  {
        document.getElementById("phoneerror").innerHTML = "** Please fill this area **"
        return false
    }
    if (isNaN(phone))  {
        document.getElementById("phoneerror").innerHTML = "** Only numbers allowed **"
        return false
    }
    if (phone.length > 11 || phone.length < 10)  {
        document.getElementById("phoneerror").innerHTML = "** Please provide a valid number **"
        return false
    }

    // Email
    if (email.length == "") {
        document.getElementById("emailerror").innerHTML = "** Please fill this area **"
        return false
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emailerror').innerHTML =" ** Please provide a valid email **";
        return false;
    }

    // Password
    if (password.length == "") {
        document.getElementById('passworderror').innerHTML =" ** Please fill this area **";
        return false
    }
    if (password.length < 7) {
        document.getElementById('passworderror').innerHTML =" ** Password should be atleast 8 characters **";
        return false
    }
    if (password.search(/[0-9]/) < 0) {
        document.getElementById('passworderror').innerHTML =" ** Your password must contain at least one number **";
        return false
    }
    if (password.search(/[A-Z]/) < 0) {
        document.getElementById('passworderror').innerHTML =" ** Your password must contain at least one capital letter **";
        return false
    }
    if (password.search(/[a-z]/) < 0) {
        document.getElementById('passworderror').innerHTML =" ** Your password must contain at least one small letter **";
        return false
    }
    if (password.search(/[(~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/) < 0) {
        document.getElementById('passworderror').innerHTML =" ** Your password must contain at least one special letter **";
        return false
    }
    // Confirm Password
    if (conpassword.length == "") {
        document.getElementById('conpassworderror').innerHTML =" ** Please fill this area **";
        return false
    }
    if (password != conpassword) {
        document.getElementById('conpassworderror').innerHTML =" ** Passwords do not match **";
        return false
    }
}