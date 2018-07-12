const titleBox = document.getElementById('title-div');
const navPop = document.querySelector('.unordered');
const navList = document.getElementsByClassName('nav-item');
const navLink = document.getElementsByClassName('nav-link');
const titleHead = document.getElementsByClassName('title-heading');
const home = document.getElementById('home');
const profilePop = document.querySelector('.profilePop');

// Define Event to display Pop-Up "Home"
home.addEventListener('mouseover', function() {
    profilePop.style.opacity = '1';
});
// Define Event to hide Pop-Up "Home"
home.addEventListener('mouseout', function() {
    profilePop.style.opacity = '0';
});

// Define a SPA Event to hide and display Nav links/creating a single page feel 
navPop.addEventListener('click', function(event) {
    event.preventDefault();
    profilePop.style.opacity = '1';
    $('.jumbotron').css({
        'display' : 'none'
    });
    if(event.target === navLink[0]) {
        displayClear();
        $('.skills').css({
            'display' : 'block'
        });
    } else if(event.target === navLink[1]) {
        displayClear();
        $('.project').css({
            'display' : 'block'
        });
    } else if(event.target === navLink[2]) {
        displayClear();
        $('.contact').css({
            'display' : 'block'
        });
    }
});
// Define a function to set display to none on select Div elements
function displayClear() {
    $('.project').css({
            'display' : 'none'
        });
    $('.skills').css({
            'display' : 'none'
        });
    $('.contact').css({
            'display' : 'none'
        });
};

window.addEventListener('resize', () => {
    
    if( window.innerWidth >= 768) {
        $('#clickHome').removeClass('fa fa-hand-o-up');
        $('#clickHome').addClass('fa fa-hand-o-left');
    }
    if( window.innerWidth <= 768) {
         $('#clickHome').removeClass('fa fa-hand-o-left');
        $('#clickHome').addClass('fa fa-hand-o-up');
    }
});

window.addEventListener('load', () => {
    if( window.innerWidth >= 768) {
        $('#clickHome').removeClass('fa fa-hand-o-up');
        $('#clickHome').addClass('fa fa-hand-o-left');
    }
    if( window.innerWidth <= 768) {
        $('#clickHome').removeClass('fa fa-hand-o-left');
        $('#clickHome').addClass('fa fa-hand-o-up');
    }
});