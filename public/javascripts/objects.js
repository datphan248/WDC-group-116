var users = [];

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

// var venue = {
//                 venue_name: document.getElementById('venue_name').value,
//                 contact_no: document.getElementById('contact_no').value,
//                 address1: document.getElementById('address1').value,
//                 address2: document.getElementById('adress2').value,
//                 suburb: document.getElementById('suburb').value,
//                 postcode: document.getElementById('postcode').value,
//                 add_venue() { return `${this.venue_name};
//             }

// function add_venue() {

//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = venue.add();

//     if (venues != []) {
//         xhttp.open("POST", "/manager_home.html", true);
//         xhttp.send();
//     }

// }

// user check-in object

var checkin = {
    datetime: new Date(),
    venue: 'KFC',
    user: 'Antony'
};

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var venue = {
    name: "Woolworths",
    long: 138.6172,
    lat: -34.8956,
    total_cases: 5,
    recent_visits: 10,
    contact_no: 82156911
    }

    address = {
        JSON.stringify([
            addressLine1: "104",
            addressLine2: "Walkerville Terrace",
            suburb: "Walkerville",
            postcode: 5081
            ]);
    }


    recent_visits = {
         JSON.stringify([
             user: User,
             datetime: today,
             time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
             ], [
             user: "Antony",
             datetime: 2019-05-28T07:00:27.706+00:00
             ]);
    }
}

var venue = {
    name: "Sam's Business",
    address = {
        addressLine1: "15",
        addressLine2: "Valley Road",
        suburb: "Adelaide",
        postcode: 5082
    }
    long: 34.55,
    lat: 36.44,
    total_cases: 45,
    recent_visits: 10,
    contact_no: 0404222022
    datetime: today

    recent_visits = {
         JSON.stringify([
             user: User,
             datetime: today,
             time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
             ], [
             user: "Luke",
             datetime: 2019-05-28T07:00:27.706+00:00
             ]);
    }
}

var manager_recent_checkin {
    name: "Tom",
    datetime: today,
    time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    status: "positive"
}






