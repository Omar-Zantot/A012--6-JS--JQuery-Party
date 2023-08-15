$(document).ready(function () {
  // SideBar default
  let sideBarWidth = $("nav").innerWidth();
  $(".nav").animate({ left: -sideBarWidth }, 0);

  // Close SideBar
  $("nav .close-nav-icon button ").click(function () {
    let sideBarWidth = $("nav").innerWidth();
    $(".nav").animate({ left: -sideBarWidth }, 1000);
  });

  // Open SideBar
  $(".open-icon button ").click(function () {
    let sideBarWidth = $("nav").innerWidth();
    $(".nav").animate({ left: "0" }, 1000);
  });
  $(".item").hide();

  // accordion
  $(".signers h3").click(function () {
    $(".item").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
  });

  // Time CountDown
  var clock = $(".clock").FlipClock({
    clockFace: "DailyCounter",
    autoStart: false,
  });

  // set time
  clock.setTime(1123200);
  // countdown mode
  clock.setCountdown(true);

  // start the clock

  clock.start();

  // text Count
  var maxLength = 100;
  $("textarea").keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
      $("#chars").text("your available character finished");
    } else {
      $("#chars").text(AmountLeft);
    }
  });

  // Scroll
  $('a[href="#"]').click(function (eventInfo) {
    let Href = $(eventInfo.target).getAttribute("href");
    $("html, body").animate(
      {
        scrollTop: $(Href).offset().top,
      },
      3000
    );
  });
});
