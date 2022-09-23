var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendseconds =document.getElementById('seconds');
var buttonStart = document.getElementById('button-Start');
var buttonStop = document.getElementById('button-Stop');
var buttonReset = document.getElementById('button-Reset');
var interval; 

function Starttimer(){
    tens++;
    if (tens<9){
        appendTens.innerHTML="0",tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if (tens>99){
        seconds++;
        appendseconds.innerHTML="0"+seconds;
        tens =0;
        appendTens.innerHTML="0"+ 0;
    }
    if (seconds > 9){
        appendseconds.innerHTML=seconds;
    }
}
buttonStart.oneclick=function(){
    interval.setinterval(Starttimer);
};
buttonStop.oneclick=function(){
    clearInterval(interval);
};
buttonReset.oneclick=function(){
    clearInterval(interval);
    tens ="00";
    seconds = "00";
    appendseconds.innerHTML=seconds;
    appendTens.innerHTML=tens;
};
