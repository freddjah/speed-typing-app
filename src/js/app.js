let currentWordElement = document.querySelector('#currentWord')
let currentPointsElement = document.querySelector('#currentPoints')
let timeLeftElement = document.querySelector('#timeLeft') 
let wordInputElement = document.querySelector('#wordInput')

let timeLeft = 5.0
let currentWord = 'Hello'
let currentPoints = 0

let setUp = () => {
  updateCurrentWord('Hello')
  setInterval(timeCountDown, 100)
}

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

let updateTimeLeft = (newTime) => {
  timeLeft = newTime
  timeLeftElement.innerText = Math.round(timeLeft * 10) / 10
}

let incrementCurrentPoints = () => {
  currentPoints++
  currentPointsElement.innerText = currentPoints
}

let updateCurrentWord = (newWord) => {
  currentWord = newWord
  currentWordElement.innerText = currentWord
}

wordInputElement.addEventListener('input', (_event) => {
  if (currentWord === wordInputElement.value && timeLeft) {
    console.log('Correct!')
    updateTimeLeft(5.0)
    incrementCurrentPoints()
  }
})

setUp()