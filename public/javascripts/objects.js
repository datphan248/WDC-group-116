let users = [];

function add_user() {

    var user = {
        first_name: document.getElementById('firstname').value,
        last_name: document.getElementById('lastname').value,
        date_of_birth: document.getElementById('birthdate').value,
        email: document.getElementById('email').value,
        mobileNumber: document.getElementById('mob_number').value,
        accountCreationTime: new Date()
    };

    users.push(user);
    document.forms[0].reset();

}

let venues = [];

function add_venue() {




}
