$(".dropdown").hover(
  function() {
    $(this).addClass("open");
  },
  function() {
    $(this).removeClass("open");
  }
);
jQuery("#clock").countdown("2019/04/30", function(event) {
  var $this = jQuery(this).html(
    event.strftime(
      "" +
        '<div class="time-entry days"><span>%-D</span> Days</div> ' +
        '<div class="time-entry hours"><span>%H</span> Hours</div> ' +
        '<div class="time-entry minutes"><span>%M</span> Minutes</div> ' +
        '<div class="time-entry seconds"><span>%S</span> Seconds</div> '
    )
  );
});
var wow = new WOW({ mobile: false });
wow.init();
$(".lightbox").nivoLightbox({
  effect: "fadeScale",
  keyboardNav: true,
  errorMessage:
    "The requested content cannot be loaded. Please try again later."
});
$(".input").blur(function() {
  if ($(this).val()) {
    $(this)
      .parent(".label-line")
      .addClass("active checked");
  } else {
    $(this)
      .parent(".label-line")
      .removeClass("active checked");
  }
});
$(".label-line").click(function() {
  $(this).addClass("active");
  if ($(".label-line").hasClass("checked")) {
  } else {
    $(".label-line").removeClass("checked");
  }
});
var offset = 200;
var duration = 500;
$(window).scroll(function() {
  if ($(this).scrollTop() > offset) {
    $(".back-to-top").fadeIn(400);
  } else {
    $(".back-to-top").fadeOut(400);
  }
});
$(".back-to-top").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});
$("#post-carousel").owlCarousel({
  navigation: false,
  pagination: true,
  slideSpeed: 400,
  stopOnHover: true,
  autoPlay: 3000,
  items: 1
});
$(".wpb-mobile-menu").slicknav({
  prependTo: ".navbar-header",
  parentTag: "span",
  allowParentLinks: true,
  duplicate: false,
  label: "",
  closedSymbol: '<i class="fa fa-angle-right"></i>',
  openedSymbol: '<i class="fa fa-angle-down"></i>'
});
