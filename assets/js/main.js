/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $footer = $("#footer"),
    $main = $("#main"),
    settings = {
      // Parallax background effect?
      parallax: true,

      // Parallax factor (lower = more intense, higher = less intense).
      parallaxFactor: 20,
    };

  // Scrolly.
  // $("#main, .scrolly").scrolly({
  //   speed: 1000,
  //   offset: function () {
  //     return $main.height();
  //   },
  // });

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1800px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Touch?
  if (browser.mobile) {
    // Turn on touch mode.
    $body.addClass("is-touch");

    // Height fix (mostly for iOS).
    window.setTimeout(function () {
      $window.scrollTop($window.scrollTop() + 1);
    }, 0);
  }

  // Footer.
  breakpoints.on("<=medium", function () {
    $footer.insertAfter($main);
  });

  breakpoints.on(">medium", function () {
    $footer.appendTo($header);
  });

  // Header.

  // Parallax background.

  // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
  if (browser.name == "ie" || browser.mobile) settings.parallax = false;

  if (settings.parallax) {
    breakpoints.on("<=medium", function () {
      $window.off("scroll.strata_parallax");
      $header.css("background-position", "");
    });

    breakpoints.on(">medium", function () {
      $header.css("background-position", "left 0px");

      $window.on("scroll.strata_parallax", function () {
        $header.css(
          "background-position",
          "left " +
            -1 * (parseInt($window.scrollTop()) / settings.parallaxFactor) +
            "px"
        );
      });
    });

    $window.on("load", function () {
      $window.triggerHandler("scroll");
    });
  }

  //   Scroll
  // $(document).ready(function () {
  //   event.preventDefault();
  //   const stickyHeaderHeight = 114;
  
  //   $(".work").click(function () {
  //     var scrollDiv = document.getElementById("work").offsetTop;
  //     window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  //   });

  //   $(".contact").click(function () {
  //     var scrollDiv = document.getElementById("three").offsetTop;
  //     window.scrollTo({ top: scrollDiv - 114, behavior: "smooth" });
  //   });

  //   $(".top").click(function () {
  //     var scrollDiv = document.getElementById("header").offsetTop;
  //     window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  //   });

  //   $(".about").click(function () {
  //     var scrollDiv = document.getElementById("about").offsetTop;
  //     window.scrollTo({ top: scrollDiv - 114, behavior: "smooth" });
  //   });
  // });

  $(document).ready(function() {
    const stickyHeaderHeight = $("#nav").outerHeight(); // Get header height dynamically

    function smoothScrollTo(targetId, event) {
        event.preventDefault(); // *Prevent the default link behavior*

        const targetElement = document.getElementById(targetId);

        if (!targetElement) {
            console.warn(`Target element with ID "${targetId}" not found.`);
            return;
        }

        const targetOffset = targetElement.offsetTop - stickyHeaderHeight;

        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        });
    }


    $("#nav a").click(function(event) {  // Attach to all links *inside* the nav
        const targetId = $(this).attr("href").substring(1); // Get ID from href (remove #)
        smoothScrollTo(targetId, event);
    });
  });
  // Main Sections: Two.

  // Lightbox gallery.
  $window.on("load", function () {
    $("#two").poptrox({
      caption: function ($a) {
        return $a.next("h3").text();
      },
      overlayColor: "#2c2c2c",
      overlayOpacity: 0.85,
      popupCloserText: "",
      popupLoaderText: "",
      selector: ".work-item a.image",
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true,
      windowMargin: breakpoints.active("<=small") ? 0 : 50,
    });
  });
})(jQuery);
