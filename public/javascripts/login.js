function display_signup() {
    window.open("https://ide-7ffa2dafa0d84506ac6daba9570f3246-8081.cs50.ws/signup.html");
}

function login() {

    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (username == "user" && password == "user123") {
      alert("User validation succeeded. Welcome!");
      location.href = "user_home.html";
     }
    else if (username == "manager" && password == "manager123") {
      alert("Venue manager validation succeeded. Welcome!");
      location.href = "manager_home.html";
    }
    else {
      alert("Validation failed. Please re-enter your login details.");
      location.href = "login.html";
    }

    return false;

}