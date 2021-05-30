
const daysTime = document.querySelector('.days')
const hoursTime = document.querySelector('.hours')
const minutesTime = document.querySelector('.minutes')
const secondsTime = document.querySelector('.seconds')
let secondSound = document.querySelector('#sec');
let minuteSound = document.querySelector('#min')

let time = setInterval(()=>{
    let destination = new Date("Tue June 8 2021").getTime();  // Destination date
    let now = new Date().getTime(); // Current Date and time
    
    let ms = 1000;  // milliseconds
    let se = 60;    // seconds
    let mn = 60;    // minutes
    let hr = 24;    // hour
    

    let countdown = destination - now;

    let  days = Math.floor(countdown / (ms * se * mn * hr));
    
    let hours = Math.floor(countdown % (ms * se * mn * hr) / (ms * se *  mn));
    
    let minutes = Math.floor(countdown % (ms *  se * mn ) / (ms * se));
    
    let seconds = Math.floor(countdown % (ms * se) / (ms));
     
    daysTime.innerHTML = days;
    hoursTime.innerHTML = hours;
    minutesTime.innerHTML = minutes;
    secondsTime.innerHTML = seconds;

   if(Math.floor(countdown % (1000 * 60) / (1000))){
        secondSound.play();
   }
   else if(Math.floor(countdown % (1000 * 60 * 60) / (1000 * 60))){
       minuteSound.play();
   }

  
},1000)




// ****************************** Attribution **************************************** \\


const naming = document.querySelector('.naming');
const attribution = document.querySelector('.attribution');
const namingAudIn = document.querySelector('#naming-audIn')
const namingAudOut = document.querySelector('#naming-audOut')

naming.addEventListener('click', ()=>{
    if(naming.classList.contains('clickIn')){
        naming.classList.remove('clickIn')
        attribution.classList.add('out')
        attribution.classList.remove('in')
        namingAudOut.play();
    }
    else{
        naming.classList.add('clickIn')
        attribution.classList.add('in')
        attribution.classList.remove('out')
        namingAudIn.play();
    }
})
