'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/auth-events.js')
const uxEvents = require('./uxShowHideClear')
const vinoEvents = require('./vino/wine-events.js')
// const grapes = require('../../images/grapes.jpg')
// const html = `<img src=${grapes} />`
const winePourVideo = require('../../video/redWineSlowPour.mp4')
const html = `<video loop='1' autoplay class='responsive-video'> <source src=${winePourVideo} type='video/mp4'> </video>`

$(() => {
  setAPIOrigin(location, config)
  authEvents.authHandlers()
  uxEvents.uxHandlers()
  vinoEvents.wineHandlers()
  // $('#grape-picture').append(html)
  $('#wine-video').append(html)

  // I added this block of code from this solution to ensure the menu closed when I
  // clicked on a menu inside hamburger menu
  // https://jsfiddle.net/Tirth_Patel/3maohcLk/
  $('.button-collapse').sideNav({
    menuWidth: 200, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true
  })

// Needed for using drop down menus:
// Source: http://materializecss.com/forms.html#select-initialization
  $(document).ready(function () {
    $('select').material_select()
  })

  // This is needed for auto complete in forms. Source: http://materializecss.com/forms.html
  $('input.autocomplete').autocomplete({
    data: {
      'Mazzocco': null,
      'Joel Gott': null,
      'Kuleto': null,
      'Elyse': null,
      'Seghesio': null,
      'Cakebread Cellars': null,
      'Sean Minor': null,
      'Petroni': null,
      'La Crema': null,
      'Zinfandel': null,
      'Pinot Noir': null,
      'Cabarnet Sauvignon': null,
      'Chardonnay': null,
      'Merlot': null,
      'Malbec': null,
      'Sauvignon Blanc': null,
      'Shiraz': null,
      'Petite Sirah': null,
      'Pinot Gris': null,
      'Sangiovese': null,
      'Napa': null,
      'Sonoma': null,
      'USA': null,
      'France': null,
      'Italy': null,
      'Australia': null,
      'Chile': null,
      'Spain': null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function (val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
  })
}) // end

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
