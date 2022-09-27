/*Global scope*/
"use strict";
var hours,minutes,seconds,ampm,time;
var hrs = document.querySelector(".hrs");
var mns = document.querySelector(".mns");
var scs = document.querySelector(".scs");
var x = setInterval(function(){
        const date = new Date();/*creating object for Date*/
        hours = date.getHours();/*getting the current hour*/
        minutes = date.getMinutes();/*getting the current minute*/
        seconds = date.getSeconds();/*getting the current second*/
        ampm = hours < 12 ? "AM" : "PM";
        hours = hours < 12 ? hours : hours - 12;/*conversion of 24 hour format into 12 hour format*/
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;/*adding 0 before hour,minutes or seconds, less than 10*/
        time=hours+":"+minutes+":"+seconds + " " + ampm;/*storing current time in (hours:minutes:second AM/PM) format*/ 
        document.getElementById("digital-clock").innerHTML=time;/*displaying time*/
        analog();
},500);/*calling this function every 500 milliseconds */

function analog(){
    hrs.style.transform=`rotate(calc(30deg * ${hours}))`;
    mns.style.transform=`rotate(calc(6deg * ${minutes}))`;
    scs.style.transform=`rotate(calc(6deg * ${seconds}))`;
}
