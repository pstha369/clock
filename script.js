var hours,minutes,seconds,ampm,time;
var hrs = document.querySelector(".hrs");
var mns = document.querySelector(".mns");
var scs = document.querySelector(".scs");
var x = setInterval(function(){
        const date = new Date();
        hours=date.getHours();
        minutes=date.getMinutes();
        seconds=date.getSeconds();
        ampm = hours < 12 ? "AM" : "PM";
        hours = hours < 12 ? hours : hours - 12;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        time=hours+":"+minutes+":"+seconds + " " + ampm;
        document.getElementById("digital-clock").innerHTML=time;
        analog(hours,minutes,seconds);
},100);

function analog(h,m,s){
    hrs.style.transform=`rotate(calc(30deg * ${h}))`;
    mns.style.transform=`rotate(calc(6deg * ${m}))`;
    scs.style.transform=`rotate(calc(6deg * ${s}))`;
}

