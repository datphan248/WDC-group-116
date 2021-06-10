function signup() {

    var first_name = document.getElementById('firstname').value;
    var last_name = document.getElementById('lastname').value;
    var date_of_birth = document.getElementById('birthdate').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mob_number').value;
    var accountCreationTime = new Date();
    var venue_1 = document.getElementById('address1').value;
    var venue_2 = document.getElementById('address2').value;
    var suburb = document.getElementById('suburb').value;
    var postcode = document.getElementById('postcode').value;

    // if (isNaN(first_name) == false && isNaN(last_name) == false && isNaN(mobileNumber) == true) {
    //   alert("Invalid input. Please check again.");
    //   return false;
    // }

    // else if (first_name == "" || last_name == "" || date_of_birth == "" || email == "" || mobileNumber == "") {
    //   alert("Signup failed. Some input fields are empty.");
    //   return false;
    // }

    // else if (document.getElementById('yes').checked == true) {
    //   if (venue_1 == "" || venue_2 == "" || suburb == "" || postcode == "") {
    //     alert("Venue managers must fill in information about their business.");
    //     return false;
    //   }
    // }

    // else if (document.getElementById('yes').checked == false && document.getElementById('no').checked == false) {
    //   alert("Please confirm if you are a venue manager.");
    //   return false;
    // }


      alert("Signup successful!");
      if (document.getElementById('yes').checked == true) {
          add_venue_manager();
      }
      else {
          add_user();
      }


    return false;

}

function new_venue() {
    alert("New venue registered!");
    add_venue();
}

 function passwordStrength(password) {

      var rating = [
          0, "<font color='black'> Weak </font>",
          25, "<font color='red'> Good </font>",
          50, "<font color='#FF8C00'> Medium </font>",
          75, "<font color='blue'> Strong </font>",
          100, "<font color='green'> Very Strong </font>"
      ];

     var score = 0;
     var pass = "";

     if (password.length > 8) {
         score += 25;
     }
     if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/))) {
         score += 25;
     }
     if (password.match(/.[,!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
         score += 25;
     }
     if (password.match(/[0-9]/)) {
         score += 25;
     }
     if (password.match(/d+/)) {
         score += 10;
     }

     for (var i = rating.length - 1; i >= 0; i -= 1) {
         if (score >= rating[i]) {
             pass = rating[i +1];
             break;
         }
     }
     document.getElementById("passwordDescription").innerHTML = "<b>" + pass + score + "</font></b>";
     document.getElementById("passwordStrength").className = "strength" + score;
}


