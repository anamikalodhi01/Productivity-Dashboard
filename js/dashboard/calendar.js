const calendarCard = document.querySelector('.calendar-card');
const calendarDisplay = document.querySelector('.calendar-display');

const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

calendarCard.addEventListener('click', () => {
    calendarCard.classList.toggle('flipped');
    if(calendarCard.classList.contains('flipped')){
        calendarDisplay.textContent = getTodayDate();
    } else {
        calendarDisplay.textContent = '';
    }
});
