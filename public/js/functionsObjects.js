/*--------------------------------------------
 ---- Coder: Masud Chowdhury -----------------
 ---- Contact: maxbizbd@ymail.com ------------
 ---- Github: https://github.com/maxbizbd ----
 -------------------------------------------*/

/**** Global Objects for common uses ****/
// Main Objects
var msObject_ = {
    "DOMready": function () {
        /*
        // Init Slick Nav
        $('#main_menu').slicknav({
            'label': '',
            //'prependTo': ''
        });
        */
    },
    "winLoad": function () {

    },
    "eventBinder": function () {
        // cacheing the document DOM inside variable
        var doc = jQuery(document);
        doc.on('click', '.ScrollToJS', function () {
            var go_to = $(this).attr('href') || $(this).data('href') || '#';
            if ($(go_to).length > 0) {
                $('html, body').animate({
                    scrollTop: $(go_to).position().top
                }, 1500);
            }
            return false;
        });
        doc.on('click', '#mobileMenuJs', function () {
            $('body').toggleClass('open-menu');
        });
        doc.on('click', '#main_menu_mobile>li.has-sub>a', function (e) {
            $(this).parent().toggleClass('open').find('div.sub-menu').stop().slideToggle();
            e.preventDefault();
        });
    }
};

/**** Global Functions for common uses ****/
//debounce function when rezize windows
function debouncer(func, timeout) {
    var timeoutID, timeout = timeout || 10;
    return function () {
        var scope = this,
            args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
            func.apply(scope, Array.prototype.slice.call(args));
        }, timeout);
    }
}

//Parallax scrolling jQuery extention 
(function ($) {
    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function () {
        windowHeight = $window.height();
    });

    $.fn.parallax = function (xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it		
        $this.each(function () {
            firstTop = $this.offset().top;
        });

        if (outerHeight) {
            getHeight = function (jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function (jqo) {
                return jqo.height();
            };
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = $window.scrollTop();

            $this.each(function () {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }

        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);

//Offset calculation
(function ($) {
    jQuery.fn.weOffset = function () {
        var de = document.documentElement;
        $(this).css("display", "block");
        var box = $(this).get(0).getBoundingClientRect();
        var top = box.top + window.pageYOffset - de.clientTop;
        var left = box.left + window.pageXOffset - de.clientLeft;
        return {
            top: top,
            left: left
        };
    };
}(jQuery));