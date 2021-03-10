// Prendo l'icona del menu/hamburger
var menu = $('.header-right > a');

// // Prendo la lista del menu
var list = $('.hamburger-menu');

// Click al Hamburger
menu.click(function () {
  // Faccio aparire la lista
  list.addClass("active");
});

// // Prendo x per chiudere il menu
var close = $('a.close');

// Click al icona x
close.click(function () {
  // Faccio scomparire la lista
  list.removeClass("active");
});


// ALTERNATIVA
// // Prendo l'icona del menu/hamburger
// var menu = $('.fas.fa-bars');
//
// // Prendo la lista del menu
// var list = $('.hamburger-menu');
//
// // Click al Hamburger
// menu.click(function () {
//   // Faccio aparire la lista
//   list.show();
// });
//
// // Prendo x per chiudere il menu
// var close = $('.fas.fa-times');
//
// // Click al icona x
// close.click(function () {
//   // Faccio scomparire la lista
//   list.hide();
// });
