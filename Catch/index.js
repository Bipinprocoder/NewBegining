const Elementshow = document.querySelectorAll('.element');
const Mole = document.querySelector('.mole');

const Score = document.querySelector('.score');
const timeLeft = document.querySelector('.time-left');

let result = 0;
let hitPosition;
let timer = 60;
let timerId = null;
function randomElement(){
    Elementshow.forEach(element =>{
        element.classList.remove('mole');
    })
    randomElement = Elementshow[Math.floor(Math.random() * 9)]
    randomElement.classList.add('mole');
    hitPosition = randomElement.id
    
}


function Movemole(){
    
    timerId = setInterval(randomElement, 500)

}
Movemole()

Elementshow.forEach(element =>{
    element.addEventListener('mousedown', () =>{
        if(element.id == hitPosition){
            result++
            Score.textContent = result;
            hitPosition = null;
        }
    })
})

function countDown(){
   timer--
   timeLeft.textContent = timer;
   if(timer ==0){
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('GAME OVER Your Final Score is' + result);
   }
}
let countDownTimerId = setInterval(countDown, 1000);