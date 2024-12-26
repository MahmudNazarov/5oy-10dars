const userName = prompt("Пожалуйста, введите ваше имя:");
const nameDisplay = document.getElementById('nameDisplay');
if (userName && userName.trim() !== "") {
    nameDisplay.textContent = `Привет, ${userName.trim()}!`;
} else {
    nameDisplay.textContent = "Вы не ввели имя.";
}