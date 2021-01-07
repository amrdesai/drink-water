// Variables
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Function: Update big cup
const updateBigCup = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    // Check & update cup percentage
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    // Remove remained if full
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
};

// Function: Hightlight the number of cups
const highlightCups = (index) => {
    if (
        smallCups[index].classList.contains('full') &&
        !smallCups[index].nextElementSibling.classList.contains('full')
    ) {
        index--;
    }

    smallCups.forEach((cup, index2) => {
        // Fill cups
        if (index2 <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
};

// Do something with all small cups
smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
});

// Run on page load
updateBigCup();
