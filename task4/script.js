const userTextField = document.querySelector('a');

userTextField.addEventListener('click', (event) => {;
    event.preventDefault();
    const userText = prompt('Очень тяжело');
    userTextField.textContent = userText;
});