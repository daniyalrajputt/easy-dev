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


// mobile menu js
$('.hamburger-menu').on('click', function () {
    $('body').toggleClass('oh');
    $('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');
})

// $('.mobile-nav .mobile-menu-list>li>a').on('click', function() {
//    $(this).next('.sub-menu').slideToggle(slow);
// });

// $(document).ready(function() {
//    //FAQ toggle 
//    $('.mobile-nav .mobile-menu-list>li>a').click(function(e) {
//       e.preventDefault();
//       let $this = $(this);
//       if ($this.next().hasClass('show')) {
//          $this.next().removeClass('show');
//          $this.next().slideUp(350);
//          $this.removeClass('open');
//       } else {
//          $this.parent().parent().find('li .sub-menu').removeClass('show');
//          $this.parent().parent().find('li > a').removeClass('open');
//          $this.parent().parent().find('li .sub-menu').slideUp(350);
//          $this.next().toggleClass('show');
//          $this.next().slideToggle(350);
//          $this.addClass('open');
//       }
//       $('.mobile-nav').animate({
//          scrollTop: 0
//       }, 800);
//    });
// });

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