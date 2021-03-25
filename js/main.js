var refs = {
    attemptInputRef: document.getElementById('attempts'),
    minNumberRef: document.getElementById('minNumber'),
    maxNumberRef: document.getElementById('maxNumber'),
    spanEnterRef: document.getElementById('textSettings'),
    settingsBtnRef: document.getElementById('settingsBtn'),
    minSpanRef: document.getElementById('minSpan'),
    maxSpanRef: document.getElementById('maxSpan'),
    attemptSpanRef: document.getElementById('attemptSpan'),
    theNumberRef: document.getElementById('enteredNumber'),
    generateBtnRef: document.getElementById('generate'),
    exitBtnRef: document.getElementById('exit'),
    outMessageRef: document.getElementById('outSpan')
}


refs.settingsBtnRef.addEventListener('click', function getValueInput(e) {
    e.preventDefault()

    var minValue = refs.minNumberRef.value;
    var maxValue = refs.maxNumberRef.value;
    var attemptValue = refs.attemptInputRef.value;
    
    if (minValue > 0 && minValue <= 100 &&
        maxValue <= 200 && maxValue >= 100 &&
        attemptValue > 0 && attemptValue <= 15) {
        refs.spanEnterRef.textContent = `Я загадал число от ${minValue} до ${maxValue}. У тебя есть ${attemptValue} попыток чтобы угадать!`;
        refs.settingsBtnRef.disabled = true;
        refs.settingsBtnRef.classList.remove('btn')
        refs.settingsBtnRef.classList.add('btn__disabled')
    } else if (minValue < 0 || minValue > 101 ||
        maxValue > 200 || maxValue < 100 ||
        attemptValue < 0 || attemptValue > 15) {
         refs.spanEnterRef.textContent = 'Заданы не верные значения!'
        }
});


function getRandomNumber(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
}

var attempts = refs.attemptInputRef.value;
var attemptsCount = attempts;
 
refs.generateBtnRef.addEventListener('click', function checkTheNumber(e) {
    e.preventDefault()
    var minValue = refs.minNumberRef.value
    var maxValue = refs.maxNumberRef.value
    var randomNumber = getRandomNumber(minValue, maxValue);
   
    var enterVal = +refs.theNumberRef.value
    if (!enterVal) return

    attemptsCount--

    if (+enterVal > randomNumber) {
    refs.outMessageRef.textContent = `'Пока холодно, число меньше ;) Осталось ${attemptsCount} попыток'`
  } else if (+enterVal < randomNumber) {
    refs.outMessageRef.textContent = `'Число больше, попробуй еще раз. Осталось ${attemptsCount} попыток'`
  } else if (+enterVal === randomNumber) {
      refs.outMessageRef.textContent = 'Ты Угадал!';
    }
    
     if (attemptsCount === 0) {
    refs.outMessageRef.textContent = 'Ты проиграл. Попробуй еще раз!'
  }
  
  if (attemptsCount !== attempts) {
    this.textContent = 'Еще!'
    
  }
    refs.theNumberRef.value = ''
})

refs.exitBtnRef.addEventListener('click', function isExit(e) {
    refs.theNumberRef.value = '';
    refs.outMessageRef.textContent = '';
    refs.settingsBtnRef.disabled = false;
})