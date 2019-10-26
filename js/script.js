$(document).ready(function() {

    $('#search').on('click', function() {
        var search = prompt("What are you looking for?");
        if (search) {
            return false;
        }
        return false;
    });

    $('.fotos').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.blockPeople').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        speed: 400
    });

    $('.textSlider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        speed: 400
    })

    $('.slide-prev').on('click', function() {
        $('.blockPeople').slick('slickPrev');
        $('.textSlider').slick('slickPrev');
    });

    $('.slide-next').on('click', function() {
        $('.blockPeople').slick('slickNext');
        $('.textSlider').slick('slickNext');
    });

    function ValidMail(e) {
        var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
        var mail = $('[type="email"]').val();
        var valid = reg.test(mail);
        if (valid) {
            alert("Thank you for your subscription!");
        } else if (!valid) {
            alert("Please, enter the correct email!");
        }
        return false;
    }

    $('#subscribe').on('click', function() {
        console.log(ValidMail());
        $(this).closest('form').find("input[type=email").val("");
    });

    $('#home').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        });
        return false;
    });

    $('#services').on('click', function() {
        if (window.matchMedia('(max-width: 510px)').matches) {
            $('html, body').animate({
                scrollTop: 600
            });
        } else if (window.matchMedia('(max-width: 1080px)').matches) {
            $('html, body').animate({
                scrollTop: 700
            });
        } else {
            $('html, body').animate({
                scrollTop: 800
            });
        }
        return false;
    });

    $('#about').on('click', function() {
        if (window.matchMedia('(max-width: 504px)').matches) {
            $('html, body').animate({
                scrollTop: 3600
            });
        } else if (window.matchMedia('(max-width: 748px)').matches) {
            $('html, body').animate({
                scrollTop: 3000
            });
        } else if (window.matchMedia('(max-width: 816px)').matches) {
            $('html, body').animate({
                scrollTop: 2800
            });
        } else if (window.matchMedia('(max-width: 1480px)').matches) {
            $('html, body').animate({
                scrollTop: 2140
            });
        } else {
            $('html, body').animate({
                scrollTop: 1610
            });
        }
        return false;
    });

    $('#portfolio').on('click', function() {
        if (window.matchMedia('(max-width: 504px)').matches) {
            $('html, body').animate({
                scrollTop: 4200
            });
        } else if (window.matchMedia('(max-width: 748px)').matches) {
            $('html, body').animate({
                scrollTop: 3600
            });
        } else if (window.matchMedia('(max-width: 816px)').matches) {
            $('html, body').animate({
                scrollTop: 3400
            });
        } else if (window.matchMedia('(max-width: 1080px)').matches) {
            $('html, body').animate({
                scrollTop: 2740
            });
        } else if (window.matchMedia('(max-width: 1145px)').matches) {
            $('html, body').animate({
                scrollTop: 3400
            });
        } else if (window.matchMedia('(max-width: 1480px)').matches) {
            $('html, body').animate({
                scrollTop: 2740
            });
        } else if (window.matchMedia('(max-width: 1547px)').matches) {
            $('html, body').animate({
                scrollTop: 2540
            });
        } else {
            $('html, body').animate({
                scrollTop: 2210
            });
        }
        return false;
    });

    $('#pricing').on('click', function() {
        if (window.matchMedia('(max-width: 504px)').matches) {
            $('html, body').animate({
                scrollTop: 10860
            });
        } else if (window.matchMedia('(max-width: 523px)').matches) {
            $('html, body').animate({
                scrollTop: 9867
            });
        } else if (window.matchMedia('(max-width: 580px)').matches) {
            $('html, body').animate({
                scrollTop: 9767
            });
        } else if (window.matchMedia('(max-width: 818px)').matches) {
            $('html, body').animate({
                scrollTop: 9714
            });
        } else if (window.matchMedia('(max-width: 1080px)').matches) {
            $('html, body').animate({
                scrollTop: 7240
            });
        } else if (window.matchMedia('(max-width: 1145px)').matches) {
            $('html, body').animate({
                scrollTop: 9440
            });
        } else if (window.matchMedia('(max-width: 1480px)').matches) {
            $('html, body').animate({
                scrollTop: 7340
            });
        } else if (window.matchMedia('(max-width: 1547px)').matches) {
            $('html, body').animate({
                scrollTop: 7140
            });
        } else {
            $('html, body').animate({
                scrollTop: 6106
            });
        }
        return false;
    });

    $('#contactUs').on('click', function() {
        $('html, body').stop().animate({
            scrollTop: $('html, body')[0].scrollHeight
        })
        return false;
    });

    $("#all").click(function(){
        $(".image").show();
        return false
    });
    
    $("#photography").click(function(){
        $(".image").hide();
        $(".image-1").show();
        $(".image-8").show();
        return false
    });

    $("#brand_ideneity").click(function(){
        $(".image").hide();
        $(".image-2").show();
        return false
    });

    $("#ui-ux").click(function(){
        $(".image").hide();
        $(".image-4").show();
        $(".image-5").show();
        $(".image-9").show();
        return false
    });

    $("#development").click(function(){
        $(".image").hide();
        $(".image-3").show();
        $(".image-6").show();
        $(".image-7").show();
        return false
    });
});