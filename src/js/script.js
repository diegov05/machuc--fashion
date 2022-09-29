$(function () {
  $("#language-selector-container").hover(
    function () {
      $(".language-selector-text").css("color", "black");
    },
    function () {
      $(".language-selector-text").css("color", "white");
    }
  );
});

$(function () {
  $(".li4-btn--subtle").hover(
    function () {
      $(".li4-icon").css("color", "black");
    },
    function () {
      $(".li4-icon").css("color", "white");
    }
  );
});

$(function () {
  $("#shop").hover(
    function () {
      $("#shop-link").css("color", "black");
    },
    function () {
      $("#shop-link").css("color", "white");
    }
  );
});

$(function () {
  $("#about").hover(
    function () {
      $("#about-link").css("color", "black");
    },
    function () {
      $("#about-link").css("color", "white");
    }
  );
});

$(function () {
  $("#shop").hover(
    function () {
      $("#shop .menu-element-background img").css("opacity", "10%");
    },
    function () {
      $("#shop .menu-element-background img").css("opacity", "1%");
    }
  );
});

$(function () {
  $("#about").hover(
    function () {
      $("#about .menu-element-background img").css("opacity", "10%");
    },
    function () {
      $("#about .menu-element-background img").css("opacity", "1%");
    }
  );
});

// $(function () {
//   $("#shop").hover(
//     function () {
//       $(".nav-grid").css("grid-template-columns", "2fr 1fr");
//       $("#menu-logo").css("display", "none");
//       $(".menu-element-background img").css("transform", "scale(2)");
//     },
//     function () {
//       $(".nav-grid").css("grid-template-columns", "repeat(3, 1fr)");
//       $("#menu-logo").css("display", "block");
//       $(".menu-element-background img").css("transform", "scale(0)");
//     }
//   );
// });

// $(function () {
//   $("#about").hover(
//     function () {
//       $(".nav-grid").css("grid-template-columns", "1fr 2fr");
//       $("#menu-logo").css("display", "none");
//       $(".menu-element-background img").css("transform", "scale(2)");
//     },
//     function () {
//       $(".nav-grid").css("grid-template-columns", "repeat(3, 1fr)");
//       $("#menu-logo").css("display", "block");
//       $(".menu-element-background img").css("transform", "scale(0)");
//     }
//   );
// });
