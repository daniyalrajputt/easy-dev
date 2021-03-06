// offer label hide
// var isAlreadyRun = false;
// $(window).scroll(function () {
//     $('.faq-section').each(function (i) {
//         var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
//         var bottom_of_window = $(window).scrollTop() + $(window).height();
//         if (bottom_of_window > (bottom_of_object + 20)) {
//             if (!isAlreadyRun) {
//                 $('.offer').hide();
//             }
//             isAlreadyRun = true;
//         } else {
//             isAlreadyRun = false;
//             $('.offer').show();
//         }
//     });
// });



$(document).ready(function () {
    //FAQ toggle 
    $('.toggle').click(function (e) {
        e.preventDefault();

        let $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
            $this.removeClass('open');
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .toggle').removeClass('open');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
            $this.addClass('open');
        }
    });
    //Parallax bg
    $('#parallaxBG').parallax("40%", -0.1);
});

$('.checkoutBtn').on('click', function () {
    $(this).parent().find('.expand-list').slideToggle(450);
    $(this).parent().find('.form-wrapper').slideToggle(450);
    // $('.expand-list').toggleClass('animate');
    // var mobileNav = $('.mobile-nav');
    // mobileNav.toggleClass('hide show');
})

// mobile menu js
$('.hamburger-menu').on('click', function () {
    $('body').toggleClass('oh');
    $('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');
})


$('.mobile-nav .mobile-menu-list>li>a').click(function () {
    $(this).toggleClass('open')
    $(this).parent().children(".sub-menu").slideToggle(350)
    // $('.sideBoxCollapse').slideToggle();
});


// Script for Custom Select DropDown
$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template +=
        '<span class="custom-select-trigger">' +
        $(this).attr("placeholder") +
        "</span>";
    template += '<div class="custom-options">';
    $(this)
        .find("option")
        .each(function () {
            template +=
                '<span class="custom-option ' +
                $(this).attr("class") +
                '" data-value="' +
                $(this).attr("value") +
                '">' +
                $(this).html() +
                "</span>";
        });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(
    function () {
        $(this)
            .parents(".custom-options")
            .addClass("option-hover");
    },
    function () {
        $(this)
            .parents(".custom-options")
            .removeClass("option-hover");
    }
);
$(".custom-select-trigger").on("click", function () {
    $("html").one("click", function () {
        $(".custom-select").removeClass("opened");
    });
    $(this)
        .parents(".custom-select")
        .toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this)
        .parents(".custom-select-wrapper")
        .find("select")
        .val($(this).data("value"));
    $(this)
        .parents(".custom-options")
        .find(".custom-option")
        .removeClass("selection");
    $(this).addClass("selection");
    $(this)
        .parents(".custom-select")
        .removeClass("opened");
    $(this)
        .parents(".custom-select")
        .find(".custom-select-trigger")
        .text($(this).text());
});



// Script for sticky Menu
var lastScrollTop; // This Varibale will store the top position
headerLogo = document.getElementById('header'); // Get The NavBar
window.addEventListener('scroll', function () {
    //on every scroll this funtion will be called
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll
    if (scrollTop > lastScrollTop) { //if it will be greater than the previous
        headerLogo.style.top = '-150px';
        //set the value to the negetive of height of navbar 
    }
    else {
        headerLogo.style.top = '0';
    }
    lastScrollTop = scrollTop; //New Position Stored
});



$('.expand-search').click(function () {
    $('.search-domain').slideDown(350);
    $('.input-wrapper').addClass('search-open');
    $('.search-close').css('display', "inline-flex");
})
$('.search-close').click(function () {
    $('.search-domain').slideUp(350);
    $('.input-wrapper').removeClass('search-open');
    $(this).css('display', 'none');
})



// Domain Filters List 
$('.addBtn').on('click', function () {
    $(this).parent().find('.button-wrapper').slideToggle(450);
    $(this).toggleClass('plusBtn')
})
