'use strict';
const days_el=document.querySelector('.days');
const hours_el=document.querySelector('.hours');
const minutes_el=document.querySelector('.minutes');
const seconds_el=document.querySelector('.seconds');
const nextyear=new Date().getFullYear()+1;
const newYear=new Date(`1 jan ${nextyear}`);
console.log(newYear);
console.log(days_el);
const countDown=function()
{
     const currentDate=new Date();  
     const timer=newYear-currentDate;
     const seconds=Math.floor(timer/1000);
     const minutes=Math.floor(seconds/60);
     const hours=Math.floor(minutes/60);
     const days=Math.floor(hours/24);
    console.log(days,hours%24,minutes%60,seconds%60);
     days_el.textContent=days;
     hours_el.textContent=hours%24;
     minutes_el.textContent=minutes%60;
     seconds_el.textContent=seconds%60;
} 
countDown();
setInterval(countDown,1000);