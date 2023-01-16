const handleButtonPress = (ev) => {
  const arithmeticOperators = ["+", "-", "*", "/", " + ", " - ", " * ", " / "]

  const input = document.querySelector('#result')

  const values = ev.currentTarget.dataset.value

  if(arithmeticOperators.includes(input.value.charAt(input.value.length - 2)) && arithmeticOperators.includes(ev.currentTarget.dataset.value)){
    return console.log('Não coloque mais de 1 operação seguida')
  }
  result.value += values
}

const handleTyping = (ev) => {
  ev.preventDefault()
  const input = document.querySelector('#result')
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

  if (allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
}

const isEmpty = str => !str.trim().length;

const clean = (ev) => {
  ev.preventDefault();

  document.querySelector('#result').value = ''
  document.querySelector('#total').value = 0
  document.querySelector('#total').classList?.remove("success")
  document.querySelector('#total').classList?.remove("failure")
} 

const calculate = (ev) => {
  ev.preventDefault();
  const input = document.querySelector('#result')?.value
  const totalinput = document.querySelector('#total')
  let result

  if(input.length > 0 && input !== undefined && input !== NaN){
    result = eval(input).toFixed(2)
  }
  if(!isFinite(result) && input !== ''){
    totalinput.classList?.remove('success')
    totalinput.classList.add('failure')
    totalinput.value = 'Não da pra dividir por zero, bobão.'
    document.querySelector('#result').value = ''
    return
  }
  if(!isEmpty(input) || input != ''){
    totalinput.classList?.remove('failure')
    totalinput.classList.add('success')
    document.querySelector('#result').value = result
    totalinput.value = result
  } else{
    totalinput.classList?.remove('success')
    totalinput.value = 'Erro.'
    totalinput.classList.add('failure')
  } 
}

document.querySelectorAll(".btnCalc").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.querySelector('#result').addEventListener('keypress', handleTyping)
document.querySelector('#equal').addEventListener('click', calculate)
document.querySelector('#clean').addEventListener('click', clean)