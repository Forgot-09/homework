const date = document.getElementById("date");
const time = document.getElementById("time");


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
    let month = now.getMonth() + 1; //년도
    let day = now.getDay(); //년도
    let hour = formatNumber(now.getHours());
    let minute = formatNumber(now.getMinutes());
    let seconds = formatNumber(now.getSeconds());
    let noon = '오전';

    if(hour > 12) {
        noon = "오후";
    } else {
        noon = "오전";
    }
    date.textContent = year+ ":" + month+ ":" + day;
    time.textContent = noon+ " | " + hour+ ":" + minute+ ":" + seconds;
}

setInterval(getTime, 100);