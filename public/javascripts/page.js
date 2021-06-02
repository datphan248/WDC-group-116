function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  var id_token = { token: googleUser.getAuthResponse().id_token };

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          alert("Welcome " + this.responseText);
      }
      else if (this.readyState == 4 && this.status >= 400) {
          alert("Login failed");
      }
  };

  xmlhttp.open("POST", "/users/login", true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send(JSON.stringify(id_token));

}

