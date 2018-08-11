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

const CURRENT_WORD_EFFECTS = [
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

const WORD_INPUT_EFFECTS = [
  {
    type: 'DOUBLE_KEY_PRESS',
    implement: (event) => {
      wordInputElement.value += event.data
    }
  },
  {
    type: 'REVERSE_INPUT',
    implement: () => {
      wordInputElement.value = wordInputElement.value.split('').reverse().join('')
    }
  }
]

let timeLeft = 5.0
let currentWord = words[Math.floor(Math.random() * words.length)]
let currentPoints = 0
let currentEffect = CURRENT_WORD_EFFECTS[0]

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
    resetEffectToDefault()
  }

  if (Math.random() > .75) {
    effectsHandler.removeEffect(currentEffect)
    const randomEffect = CURRENT_WORD_EFFECTS[Math.floor(Math.random() * CURRENT_WORD_EFFECTS.length)]
    currentEffect = randomEffect
    effectsHandler.addEffect(randomEffect)
  }

  console.log(currentEffect.type)
}

let resetEffectToDefault = () => {
  effectsHandler.removeEffect(currentEffect)
  currentEffect = CURRENT_WORD_EFFECTS[0]
  effectsHandler.addEffect(currentEffect)
}

let setEmptyWordInput = () => {
  wordInputElement.value = ''
}

let validateWordInput = (event) => {
  if (Math.random() > .9 && event.data) {
    const randomWordInputEffect = WORD_INPUT_EFFECTS[Math.floor(Math.random() * WORD_INPUT_EFFECTS.length)]
    randomWordInputEffect.implement(event)
  }

  if (currentWord === wordInputElement.value && timeLeft) {
    updateCurrentWord()
    setEmptyWordInput()
    updateTimeLeft(5.0)
    incrementCurrentPoints()
  }
}

const effectsHandler = {
  addEffect: (effect) => {
    effect.cssClasses.forEach((cssClass) => {
      currentWordElement.classList.add(cssClass)
    })
  },
  removeEffect: (effect) => {
    effect.cssClasses.forEach((cssClass) => {
      currentWordElement.classList.remove(cssClass)
    })
  }
}

wordInputElement.addEventListener('input', validateWordInput)

setUp()