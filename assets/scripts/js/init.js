(function ($) {
  $(function () {
    // I add this block of code from this solution to ensure the menu closed when I
    // clicked on a menu inside hamburger menu
    // https://jsfiddle.net/Tirth_Patel/3maohcLk/
    $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true
    })
  }) // end of document ready
})(jQuery) // end of jQuery name space
