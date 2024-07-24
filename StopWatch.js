let display=document.querySelector(".display");

let startBtn=document.getElementById("startBtn");
let stopBtn=document.getElementById("stopBtn");
let resetBtn=document.getElementById("restartBtn");

let verify=false;
let misec=0;
let secs=0;
let mins=0;
let hrs=0;
let timerId=null;
startBtn.addEventListener('click',function(){
    
    if(timerId!==null){
        clearInterval(timerId);
    }
    if(verify==false){
    timerId= setInterval(startTimer,10);
    }else{
        misec=0;
        secs=0;
        mins=0;
        timerId=null
        timerId= setInterval(startTimer,10);
    }
})

stopBtn.addEventListener('click',function(){
    verify=false;
    clearInterval(timerId);
})

resetBtn.addEventListener('click',function(){
    verify=true;
    clearInterval(timerId)
    display.innerHTML=`00:00:00`;
})

function startTimer(){
misec++;
if(misec==100){
    misec=0;
    secs++;
    if(secs==60){
        secs=0;
        mins++;
        if(mins==60){
            mins=0;
            hrs++;
        }
        if(hrs==12){
            hrs=0;
        }
    }
}
let milisecs=(misec<10)?`0${misec}`:misec;
let sec=(misec<10)?`0${secs}`:secs;
let min=(misec<10)?`0${mins}`:mins;
display.innerHTML=`${min}: ${sec}: ${milisecs}`
}