const date = document.getElementById("date");
const time = document.getElementById("time");
const days = ["SUN", "MON", "TUE", "THUR", "FIR"];

function formatNumber(number) {
    if(number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}

function getTime() {
    let now = new Date();
    let year = now.getFullYear(); //년도
    let month = formatNumber(now.getMonth() + 1); //년도
    let day = formatNumber(now.getDate());
    let  dayOfTheWeek= days[now.getDay()]; //년도
   let hour = formatNumber(now.getHours());
    let minute = formatNumber(now.getMinutes()); 
    let seconds = formatNumber(now.getSeconds());
    let noon = 'A.M.';

    if(hour > 12) {
        noon = "P.M.";
        hour = hour - 12;
    } else {
        noon = "A.M.";
    }
    date.textContent = year+ "-" + month+ "-" + day + " " + dayOfTheWeek;
    time.textContent = noon+ " " + hour+ ":" + minute+ ":" + seconds;
}

setInterval(getTime, 100);