// active navbar
let header = document.getElementById('header');

window.addEventListener('scroll', function() {

    if(window.scrollY > 40){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }

});

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse =document.querySelector('.navbar-collapse.collapse');
navbar.forEach( function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove('show');  
    })
})

