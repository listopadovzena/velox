const toggleMenu = $('#toggle-menu');
const navMenu = $('#nav-menu');

toggleMenu.click(function(){
    const $this= $(this);
    let h;
    if(navMenu.is(':hidden')) {
        h = navMenu.show().height();
            navMenu.css('height', 0);

            navMenu.animate({'height': h}, 500, function(){
                $this.addClass('active');
            });
    } else {
        navMenu.animate({'height': 0}, 500, function(){
            $this.removeClass('active');
            navMenu.removeAttr('style').hide();
        });
    }
});

function initMobile() {

    $('body').addClass('is-mobile').removeClass('is-desktop');
    console.log("is-mobile");
}


function initDesktop() {
    $('body').addClass('is-desktop').removeClass('is-mobile');
    toggleMenu.removeClass('active');
    navMenu.removeAttr('style');
    console.log("is-desktop");
 }





ssm.addState({
    id: 'tablet',
    query: '(max-width: 768px)',
    onEnter: function(){
        initMobile();
    }
});

ssm.addState({
    id: 'desktop',
    query: '(min-width: 768px)',
    onEnter: function(){
        initDesktop();
    }
});







$('#slider').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 2,
    autoplay:true,
    dots:true,
    dotsClass: 'mydots',

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});





$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});



$(function() {

    var newSelection = "";

    $("#flavor-nav a").click(function(){

        $("#all-flavors").fadeTo(200, 0.10);

        $("#flavor-nav a").removeClass("current");
        $(this).addClass("current");

        newSelection = $(this).attr("rel");

        $(".flavor").not("."+newSelection).slideUp();
        $("."+newSelection).slideDown();

        $("#all-flavors").fadeTo(600, 1);

    });

});