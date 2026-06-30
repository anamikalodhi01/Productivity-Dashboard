// get theme icon element
const themeIcon = document.querySelector('.theme-icon');

// check for saved theme preference or deafult to dark
const currentTheme  = localStorage.getItem('theme') || 'dark';

// apply saved theme on page load
document.documentElement.setAttribute('data-theme', currentTheme);

// update icon based on current theme
function updateThemeIcon(){
    const theme = document.documentElement.getAttribute('data-theme');
    if(theme ==='light'){
        themeIcon.classList.remove('fa-circle-half-stroke');
        themeIcon.classList.add('fa-moon');
    }else{
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-circle-half-stroke');
    }
}

//Initialise icon 
updateThemeIcon();

// Toggle theme on icon click
themeIcon.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');

    // switch theme
    if(theme === 'dark'){
        theme = 'light';
    }else{
        theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});