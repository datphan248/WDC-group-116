function signup() {

    var first_name = document.getElementById('firstname').value;
    var last_name = document.getElementById('lastname').value;
    var date_of_birth = document.getElementById('birthdate').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mob_number').value;
    var accountCreationTime = new Date();

    if (isNaN(first_name) == true && isNaN(last_name) == true && isNaN(mobileNumber) == false) {
      alert("Signup Successful!");
      location.href = "user_home.html";
    }

    if (first_name == "" || last_name == "" || date_of_birth == "" || email == "" || mobileNumber == "") {
      alert("Signup failed. Some input fields are empty.");
      location.href = "signup.html";
    }

    else {
      alert("Signup failed. Please check that the information you have entered is valid and correct.");
      location.href = "signup.html";
    }

    return false;

}


function strength_check() {

      if (document.getElementById("password").value != NULL) {
        var str = document.getElementById("password").value;
      }

      var strength = document.getElementById("StrengthDisp").value;

      while (str != NULL) {
            if (str.length == 0) {
              strength.innerHTML = "Weak";
              strength.style.color = "yellow";
            }

            if (str.length > 4 && str.length <= 6) {
              strength.innerHTML = "Medium";
              strength.style.color = "yellow";
            }
            if (str.length > 8 &&  isNaN(str) != false) {
              strength.innerHTML = "Strong";
              strength.style.color = "green";
            }
      }


}