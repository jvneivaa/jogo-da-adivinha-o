// variáveis 
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const tryButton = document.querySelector('#tryButton')
const resetButton = document.querySelector('#resetButton')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos
tryButton.addEventListener('click', handleTryClick)
resetButton.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// funções callback
function toggleScreen() {
    screen2.classList.toggle('hide')
    screen1.classList.toggle('hide')
}

function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector('#inputNumber')

    if(inputNumber.value == ""){
        alert('Você precisa digitar um número válido!')
        xAttempts -= 1
    }

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativa(s)!`
        screen2.querySelector('p').innerText = `O número pensado foi ${randomNumber}.`
    }
    
    inputNumber.value = ""
    xAttempts++

    if(xAttempts >= 6) {
        toggleScreen()
        screen2.querySelector('h2').innerText = `Você esgotou o número máximo de 5 tentativas!`
        screen2.querySelector('p').innerText = `O número pensado foi ${randomNumber}.`
        randomNumber = Math.round(Math.random() * 10)
        xAttempts = 1
    }
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}