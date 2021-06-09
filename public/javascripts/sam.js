function getDate() {
    document.getElementById("current_time").innerHTML = new Date();
}

function appendDate() {
    var currentDate = new Date();
    let appendTarget = document.getElementById("append_time").innerHTML;
    appendTarget.append(currentDate);
}

