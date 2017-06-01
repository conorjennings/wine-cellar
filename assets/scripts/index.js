'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/auth-events.js')
const uxEvents = require('./uxShowHideClear')
// const grapes = require('../../images/grapes.jpg')
// const html = `<img src=${grapes} />`
const winePourVideo = require('../../video/redWineSlowPour.mp4')
const html = `<video loop='1' autoplay class='responsive-video'> <source src=${winePourVideo} type='video/mp4'> </video>`

$(() => {
  setAPIOrigin(location, config)
  authEvents.authHandlers()
  uxEvents.uxHandlers()
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
}) // end

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
