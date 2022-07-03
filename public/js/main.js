/*--------------------------------------------
 ---- Coder: Masud Chowdhury -----------------
 ---- Contact: maxbizbd@ymail.com ------------
 ---- Github: https://github.com/maxbizbd ----
 -------------------------------------------*/

/********** Document Ready Function ************/
$(document).ready(function () {
  //$('[data-toggle="tooltip"]').tooltip();
  msObject_.DOMready();
  msObject_.eventBinder();
});

/********** Window load complete *************/
$(window).on("load", function (e) {
  msObject_.winLoad();
});

/************** Window resize ***************/
$(window).resize(debouncer(function () {}));

/************** Window resize ***************/
$(window).scroll(debouncer(function () {
    if ($(window).scrollTop()>50) {
      $('body').addClass('sticky-header');
    } else {
      $('body').removeClass('sticky-header');
    }
}));
