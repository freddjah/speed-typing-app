let currentWordElement = document.querySelector('#currentWord')
let currentPointsElement = document.querySelector('#currentPoints')
let timeLeftElement = document.querySelector('#timeLeft') 
let wordInputElement = document.querySelector('#wordInput')

let timeLeft = 5.0

let timeCountDown = () => {
  if (timeLeft > .1) {
    timeLeft = timeLeft - .1
    timeLeftElement.innerText = Math.round(timeLeft * 10) / 10
  } else {
    timeLeft = 0
    timeLeftElement.innerText = timeLeft
    clearInterval(timeCountDown)
  }
}

setInterval(timeCountDown, 100)