$(function () {
  $("#mobile__btn").on("click", function () {
    // Abre/fecha o menu mobile
    $("#mobile__menu").toggleClass("active");
    // Alterna entre o ícone de "menu" (fa-bars) e o "X" (fa-xmark)
    $(this).find("i").toggleClass("fa-bars fa-xmark");
  });
});
