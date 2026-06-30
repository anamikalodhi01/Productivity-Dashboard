const clockCard = document.querySelector('.clock-card');
const clockDisplay = document.querySelector('.clock-display');

function getTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// flip card on click
clockCard.addEventListener('click', () => {
    clockCard.classList.toggle('flipped');
    
    // update time when flipping
    if(clockCard.classList.contains('flipped')){
        clockDisplay.textContent = getTime();
    }
});

