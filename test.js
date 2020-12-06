
let hourHand=document.querySelector('[hour-hand]');
let minuteHand=document.querySelector('[minute-hand]');
let secondHand=document.querySelector('[second-hand]');
setInterval(SetClock,1000)
function SetClock() {
   let currentTime=new Date();
   let second=currentTime.getSeconds()/60;
   let  minute=(second+currentTime.getMinutes())/60;
   let hour=(minute+currentTime.getHours())/12;

   setRotation(secondHand,second)
   setRotation(minuteHand,minute)
   setRotation(hourHand,hour)

}

function  setRotation(element,rotationRatio) {
element.style.setProperty('--rotation',rotationRatio*360);
}

// function showTime() {
//    let clock=document.getElementById("clock");
//    let date=new Date();
//    let h=date.getHours();
//    let m=date.getMinutes();
//    let s=date.getSeconds();
//    let session="AM";
//    if (h>12){
//       h-=12;
//       session="PM";
//    }
//    clock.innerHTML=`${h}:${m}:${s}:${session}`;
// }
// setInterval(showTime,1000);