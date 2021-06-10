function add_user() {

    var user = [
    {
        first_name: document.getElementById('firstname').value,
        last_name: document.getElementById('lastname').value,
        date_of_birth: document.getElementById('birthdate').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        mobileNumber: document.getElementById('mob_number').value,
        accountCreationTime: new Date(),
    },

];


    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "/register_user", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));

}

function add_venue_manager() {

    var venue_manager = [
    {
        first_name: document.getElementById('firstname').value,
        last_name: document.getElementById('lastname').value,
        date_of_birth: document.getElementById('birthdate').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        mobileNumber: document.getElementById('mob_number').value,
        accountCreationTime: new Date(),
    },
];

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "/register_venue_manager", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(venue_manager));

}

function add_venue() {

    var venue = [
    {
        venue_name: document.getElementById('name').value,
        address1:document.getElementById('ad1').value,
        address2: document.getElementById('ad2').value,
        suburb: document.getElementById('suburb').value,
        postcode: document.getElementById('postcode').value,
    },
];

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/register_venue", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(venue));
}


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
    contact_no: 82156911,
    address: {
        addressLine1: "104",
        addressLine2: "Walkerville Terrace",
        suburb: "Walkerville",
        postcode: 5081
    },
    recent_visits: {
         user: null,
         datetime: today
    }
};








