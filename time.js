const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + (13 * 24) + 8);
targetTime.setMinutes(targetTime.getMinutes() + 12);
targetTime.setSeconds(targetTime.getSeconds() + 5);

var x = setInterval(function timer() {
    var now = new Date().getTime();
    var timeDiff = targetTime - now;

    var secs = Math.floor(timeDiff / 1000);
    var mins = Math.floor(secs / 60);
    var hours = Math.floor(mins / 60);
    var days = Math.floor(hours / 24);
    
    secs = secs % 60;
    mins = mins % 60;
    hours = hours % 24;

    if (secs<10) {secs = "0" + secs};
    if (mins<10) {mins = "0" + mins};
    if (hours<10) {hours = "0" + hours};
    if (days<10) {days = "0" + days};
    
    document.getElementById("secs0").innerHTML = String(secs)[0];
    document.getElementById("secs1").innerHTML = String(secs)[1];
    document.getElementById("mins0").innerHTML = String(mins)[0];
    document.getElementById("mins1").innerHTML = String(mins)[1];
    document.getElementById("hours0").innerHTML = String(hours)[0];
    document.getElementById("hours1").innerHTML = String(hours)[1];
    document.getElementById("days0").innerHTML = String(days)[0];
    document.getElementById("days1").innerHTML = String(days)[1];

}, 0);

