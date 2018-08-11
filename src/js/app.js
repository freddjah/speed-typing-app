let currentWordElement = document.querySelector('#currentWord')
let currentPointsElement = document.querySelector('#currentPoints')
let timeLeftElement = document.querySelector('#timeLeft') 
let wordInputElement = document.querySelector('#wordInput')

const words = [
  'roomy',
  'force',
  'act',
  'imperfect',
  'squeak',
  'tramp',
  'dare',
  'ordinary',
  'raspy',
  'pickle',
  'men',
  'abiding',
  'slim',
  'place',
  'move',
  'truculent',
  'tearful',
  'nondescript',
  'rate',
  'passenger',
  'deserted',
  'grateful',
  'obscene',
  'grain',
  'toes',
  'sincere',
  'brainy',
  'shut',
  'bike',
  'full',
  'fat',
  'shelter',
  'third',
  'cheer',
  'hapless',
  'melted',
  'preserve',
  'massive',
  'narrow',
  'finger',
  'periodic',
  'number',
  'slow',
  'ground',
  'helpful',
  'hanging',
  'winter',
  'scene',
  'rabid',
  'pleasant',
  'cultured',
  'cracker',
  'pollution',
  'tremble',
  'support',
  'glue',
  'nasty',
  'salty',
  'drag',
  'succinct',
  'surprise',
  'orange',
  'metal',
  'change',
  'duck',
  'legal',
  'spiritual',
  'flimsy',
  'kindly',
  'pigs',
  'lacking',
  'afternoon',
  'root',
  'harmonious',
  'last',
  'cagey',
  'basin',
  'song',
  'increase',
  'open',
  'zephyr',
  'church',
  'mourn',
  'suggestion',
  'itchy',
  'army',
  'thoughtless',
  'card',
  'secretary',
  'quince',
  'juggle',
  'art',
  'tacky',
  'madly',
  'mere',
  'motionless',
  'calendar',
  'hallowed',
  'bomb',
  'wide'
]

const EFFECTS = [
  {
    type: 'DEFAULT',
    cssClasses: ['red-text', 'text-darken-4']
  },
  {
    type: 'INVERTED',
    cssClasses: ['red-text', 'text-darken-4', 'inverted']
  },
  {
    type: 'BARELY_VISIBLE',
    cssClasses: ['grey-text', 'text-lighten-4']
  },
  {
    type: 'UPSIDE_DOWN',
    cssClasses: ['red-text', 'text-darken-4', 'upside-down']
  }
]


let timeLeft = 5.0
let currentWord = words[Math.floor(Math.random() * words.length)]
let currentPoints = 0
let currentEffect = EFFECTS[0]

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
  
  if (currentEffect.type !== 'DEFAULT') {
    resetEffectToDefault(currentEffect)
  }

  if (Math.random() > .75) {
    effectsHandler.removeEffect(currentEffect)
    const randomEffect = EFFECTS[Math.floor(Math.random() * EFFECTS.length)]
    effectsHandler.addEffect(randomEffect)
  }
}

let resetEffectToDefault = (currentEffect) => {
  effectsHandler.removeEffect(currentEffect)
  currentEffect = EFFECTS[0]
  effectsHandler.addEffect(currentEffect)
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

const effectsHandler = {
  addEffect: (effect) => {
    effect.cssClasses.forEach((effect) => {
      currentWordElement.classList.add(effect)
    })
  },
  removeEffect: (effect) => {
    effect.cssClasses.forEach((effect) => {
      currentWordElement.classList.remove(effect)
    })
  }
}

wordInputElement.addEventListener('input', validateWordInput)

setUp()