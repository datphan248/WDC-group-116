var user = {
                first_name: document.getElementById('firstname').value,
                last_name: document.getElementById('lastname').value,
                date_of_birth: document.getElementById('birthdate').value,
                email: document.getElementById('email').value,
                mobileNumber: document.getElementById('mob_number').value,
                accountCreationTime: new Date(),
                add() { return `${this.first_name} ${this.last_name}`; },
             };


function add_user() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = user.add();

    xhttp.open("POST", "/user_home.html", true);
    xhttp.send();

}

var venue = {
                venue_name: document.getElementById('venue_name').value,
                contact_no: document.getElementById('contact_no').value,
                address1: document.getElementById('address1').value,
                address2: document.getElementById('adress2').value,
                suburb: document.getElementById('suburb').value,
                postcode: document.getElementById('postcode').value,
                add_venue() { return `${this.venue_name}``; },
             };

function add_venue() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = venue.add();

    if (venues != []) {
        xhttp.open("POST", "/manager_home.html", true);
        xhttp.send();
    }

}

