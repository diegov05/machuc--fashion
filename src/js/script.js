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
      $("#shop .menu-element-background img").toggleClass(
        "opaque-background-img"
      );
    },
    function () {
      $("#shop .menu-element-background img").toggleClass(
        "opaque-background-img"
      );
    }
  );
});

$(function () {
  $("#about").hover(
    function () {
      $("#about .menu-element-background img").toggleClass(
        "opaque-background-img"
      );
    },
    function () {
      $("#about .menu-element-background img").toggleClass(
        "opaque-background-img"
      );
    }
  );
});

$(function () {
  $("#shop").hover(
    function () {
      $(".nav-grid").toggleClass("two-column-grid");
      $("#menu-logo").toggleClass("hide");
      $(".menu-element-background img").toggleClass("big-img");
    },
    function () {
      $(".nav-grid").toggleClass("two-column-grid");
      $("#menu-logo").toggleClass("hide");
      $(".menu-element-background img").toggleClass("big-img");
    }
  );
});

$(function () {
  $("#about").hover(
    function () {
      $(".nav-grid").toggleClass("two-column-grid");
      $("#menu-logo").toggleClass("hide");
      $(".menu-element-background img").toggleClass("big-img");
    },
    function () {
      $(".nav-grid").toggleClass("two-column-grid");
      $("#menu-logo").toggleClass("hide");
      $(".menu-element-background img").toggleClass("big-img");
    }
  );
});
