// menu responsivo

function funcaodomenu() {
    var x = document.getElementById("nav");
    if (x.className === "topo") {
        x.className += " responsive";
    } else {
        x.className = "topo";
    }
}

// slide

function currentSlide(n) {
    showSlides(slideIndex = n);
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// slide produtos

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    variableWidth: true

});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});

// coleções

function colecoes(evt, tipos) {
    var i, cardcolecoes, linkscol;
    cardcolecoes = document.getElementsByClassName("cardcolecoes");
    for (i = 0; i < cardcolecoes.length; i++) {
        cardcolecoes[i].style.display = "none";
    }
    linkscol = document.getElementsByClassName("linkscol");
    for (i = 0; i < linkscol.length; i++) {
        linkscol[i].className = linkscol[i].className.replace(" active", "");
    }
    document.getElementById(tipos).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function () {
    $('#phone-number').mask("(99) 99999-9999");
})