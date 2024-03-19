const screenWidthThreshold = 909;
const joinProposeElement = document.querySelector('.join__propose');
const joinPropose2Element = document.querySelector('.join__propose2');
function updateJoinProposeText() {
  if (window.innerWidth <= screenWidthThreshold) {
    joinProposeElement.innerHTML = `Получи <span style="color: #5601E1;">спецпредложение</span> у куратора после регистрации`;
  } else {
    joinProposeElement.innerHTML = `Только до конца месяца действует <span style="color: #5601E1;">специальное предложение</span>!`;
    joinPropose2Element.innerHTML = `<b>Подробности у куратора после регистрации</b>`
  }
}

// Call the function initially to set the correct text based on the current screen width
updateJoinProposeText();

// Add a listener to update the text when the window is resized
window.addEventListener('resize', updateJoinProposeText);