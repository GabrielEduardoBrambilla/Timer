// DOM
// Document Object Model

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes

function resetControls() {
  play.classList.remove('hide')
  pause.classList.add('hide')
  buttonSet.classList.remove('hide')
  stop.classList.add('hide')
}

play.addEventListener('click', function () {
  play.classList.add('hide')
  pause.classList.remove('hide')
  buttonSet.classList.add('hide')
  stop.classList.remove('hide')
})

pause.addEventListener('click', function () {
  pause.classList.add('hide')
  play.classList.remove('hide')
})

stop.addEventListener('click', () => {
  resetControls()
})

soundOff.addEventListener('click', () => {
  soundOff.classList.add('hide')
  soundOn.classList.remove('hide')
})

soundOn.addEventListener('click', () => {
  soundOn.classList.add('hide')
  soundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', () => {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = minutes
})
