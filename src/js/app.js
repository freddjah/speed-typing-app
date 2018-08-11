let currentWordElement = document.querySelector('#currentWord')
let currentPointsElement = document.querySelector('#currentPoints')
let timeLeftElement = document.querySelector('#timeLeft') 
let wordInputElement = document.querySelector('#wordInput')

const words = [
  'hello',
  'this',
  'is',
  'speed',
  'typing'
]
let timeLeft = 5.0
let currentWord = words[Math.floor(Math.random() * words.length)]
let currentPoints = 0

let setUp = () => {
  updateCurrentWord(currentWord)
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

let updateCurrentWord = () => {
  const newWord = words[Math.floor(Math.random() * words.length)]
  currentWord = newWord
  currentWordElement.innerText = currentWord
}

let setEmptyWordInput = () => {
  wordInputElement.value = ''
}

let validateWordInput = () => {
  if (currentWord === wordInputElement.value && timeLeft) {
    updateCurrentWord()
    setEmptyWordInput()
    updateTimeLeft(5.0)
    incrementCurrentPoints()
  }
}

wordInputElement.addEventListener('input', validateWordInput)

setUp()