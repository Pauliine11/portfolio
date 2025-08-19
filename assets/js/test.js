// Dark - Light

let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

const enableDarkMode = () => {
    darkModeEnabled = true;
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');    
}

const disableDarkMode = () => {
    darkModeEnabled = false;
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'fasle');
}

document.addEventListener('DOMContentLoaded', () => {
    darkModeButton.checked = darkModeEnabled;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
});

const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('change', () => {
    if(darkModeButton.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Menu

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Multiple text

const typed = new Typed('.multiple', {
    strings: ['Front Developer', 'End Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backlDelay: 1000,
    loop: true
});