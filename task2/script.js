const consoleLog = document.querySelector('#consoleLog');
const testTextField = document.querySelector('#testTextField');
const userText = document.querySelector('#userText');

consoleLog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль');
})

testTextField.addEventListener('click', () => {
  // Тело обработчика
  alert("Как прекрасен этот мир");
  //конец тела обработчика
})

userText.addEventListener('click', () => {
  // Тело обработчика
  prompt('Крутится вертится шар голубой');
  //конец тела обработчика
})
