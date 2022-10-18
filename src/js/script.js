$(function () {
  $("header").hover(
    function () {
      $("nav ul li a, header .title, .language-selector div, .filler").css(
        "color",
        "black"
      );
    },
    function () {
      $("nav ul li a, header .title, .language-selector div, .filler").css(
        "color",
        "#cecece"
      );
    }
  );
});
