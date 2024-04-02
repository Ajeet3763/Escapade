// -------------------Sticky Nav BAr-------------------

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var box = $(".header-text").height();
  var header = $("header").height();

  if (scroll >= box - header) {
    $("header").addClass("background-header");
  } else {
    $("header").removeClass("background-header");
  }
});

// -------------------Mobile Nav Bar-------------------

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});

// -------------------OWl Carousel-------------------
$(".banner-slider").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  items: 1,
  dots: true,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      dots: true,
      nav: false,
      loop: true,
    },
  },
});


// -------------------Bottom to top arrow-------------------
$(document).ready(function () {
  $(".scroll-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 800) {
      $(".scroll-top").fadeIn(500);
    } else {
      $(".scroll-top").fadeOut(500);
    }
  });
});
