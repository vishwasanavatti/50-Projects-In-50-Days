const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const clipboardEl = document.getElementById('clipboard');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value; //'+" parses element to number"
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassowrd(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassowrd(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  //generating array as 0: {lower: true} 1: {upper: false} and filtering to get values that are true
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  return generatedPassword.slice(0, length);
}

//ASCII code for lowercase letters starts from 97
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//ASCII code for Uppercase letters starts from 65
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//ASCII code for numbers starts from 48
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

clipboardEl.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  alert('Password is copied to clipboard');
});
