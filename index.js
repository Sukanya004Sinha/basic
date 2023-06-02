//basically in one rotation there is 360 deg
//in 12 hour there is 360 degree in 1 hour = 360/12 = 30 deg
// in 60 mins there is 360 deg = 1 min 6 deg
// in 60 sec = 360 deg => 1 sec = 6 deg 
function clock () {
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second=  document.querySelector(".second");
    let date = new Date();
    console.log(date);
    let hr = date.getHours();
    let mint = date.getMinutes(); 
    let sec = date.getSeconds();
    hour.style.transform = `rotateZ(${hr*30 +  mint/12}deg)`;
    minute.style.transform = `rotateZ(${minute*6}deg)`;
    second.style.transform =   `rotateZ(${sec*6}deg)`;
}
clock();
setInterval(clock,1000);