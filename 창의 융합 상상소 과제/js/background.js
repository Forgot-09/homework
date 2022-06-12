const body = document.getElementById("body")
let nowImg = Math.floor(Math.random() * 15) + 1;
document.body.style.background = `url('./img/${nowImg.toString()}.jpg')`;

console.log(nowImg);

setInterval(() => {
    console.log(nowImg);
    if(nowImg < 15) {
        nowImg = nowImg + 1;
    } else {
        nowImg = 1;
    }
    document.body.style.background = `url('./img/${nowImg.toString()}.jpg')`;
}, 60000);