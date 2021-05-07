function menuOpen() {
    let hamburger = document.querySelector('#hamburger');
    let nav = document.querySelector('#nav')
    hamburger.onclick = function() {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('nav_active');
    }
    let navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(navLink){
        navLink.onclick = function(){
            nav.classList.remove('nav_active');
            hamburger.classList.remove('hamburger_active')
        }
    })
}
menuOpen();