//Menu button/Navbar functionality
const menuBtn = document.querySelector('.menu-button');
const navBarItems = document.querySelector('.navbar');
let menuOpen = false;


menuBtn.addEventListener('click', () => {

    if (!menuOpen) {
        menuBtn.classList.add('open');
        navBarItems.classList.add('pressed')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navBarItems.classList.remove('pressed');
        menuOpen = false;

    }

});