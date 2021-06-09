// var dateFormat = require('dateformat');
// var now = new Date();
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

function getDate() {
    var d = new Date();
    var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    document.getElementById("current_time").innerHTML = datestring;
}

// function appendDate() {
//     var currentDate = new Date();
//     let appendTarget = document.getElementById("append_time").innerHTML;
//     appendTarget.append(currentDate);
// }