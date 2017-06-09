'use strict'
// The following is required to turn off an ESLinter error on Materialize.toast.
// It has no impact on any functionality in either localhost or on deployed site.
// Source: http://eslint.org/docs/rules/no-undef
/* global Materialize */
/* eslint no-undef: "error" */

const store = require('../store.js')
const wineListingHandleBars = require('../templates/wine-listing.handlebars')
const helpers = require('./../helpers/helper-events')

const createWineSuccess = (data) => {
  // store.wines = data.wines
  $('.create-wine-section').hide()
  $('#create-wine-form').trigger('reset')
  $('.parallax-section').show()
  const randomWineQuote = helpers.onLoadRandomWineQuote()
  $('.random-wine-quote').html(randomWineQuote)
}

const createWineFailure = (error) => {
  console.error(error)
}

// const readWinesSuccess = (data) => {
//   store.wines = data.wines
//   data.wines.sort(function (a, b) {
//     return a.id - b.id
//   })
//   $('#wine-collection').html(wineListingHandleBars({ wines: data.wines }))
//   $('#wine-collection').show()
//   const randomWineQuote = helpers.onLoadRandomWineQuote()
//   $('.random-wine-quote').html(randomWineQuote)
// }

const readWinesSuccess = (data) => {
  store.wines = data.wines
  // Sort wines by ID so they are always in the same order.
  data.wines.sort(function (a, b) {
    return a.id - b.id
  })

  const randomWineQuote = helpers.onLoadRandomWineQuote()
  $('.random-wine-quote').html(randomWineQuote)

  const showWinesInCellar = wineListingHandleBars({ wines: data.wines })

  const winesInCellar = showWinesInCellar.length
  if (winesInCellar === 0) {
    const errorMessage = $('<h6>No wine in the cellar? Time to stock up...</h6>')
    Materialize.toast(errorMessage, 3000, 'rounded purple')
  }
  if (winesInCellar > 0) {
    // $('#wine-collection').html(wineListingHandleBars({ wines: data.wines }))
    $('#wine-collection').html(showWinesInCellar)
    $('#wine-collection').show()
  }
}

const readWinesAfterDeleteSuccess = (data) => {
  store.wines = data.wines
  data.wines.sort(function (a, b) {
    return a.id - b.id
  })
  $('#wine-collection').html(wineListingHandleBars({ wines: data.wines }))
  $('#wine-collection').show()
  const randomWineQuote = helpers.onLoadRandomWineQuote()
  $('.random-wine-quote').html(randomWineQuote)
}

const readWinesFailure = (error) => {
  console.error(error)
}

const updateWineSuccess = () => {
  $('.update-wine-section').hide()
  $('#update-wine-form').trigger('reset')
  const randomWineQuote = helpers.onLoadRandomWineQuote()
  $('.random-wine-quote').html(randomWineQuote)
}

const updateWineFailure = (error) => {
  console.error(error)
}

const deleteWineSuccess = () => {
}

const deleteWineFailure = (error) => {
  console.error(error)
}

module.exports = {
  createWineSuccess,
  createWineFailure,
  readWinesSuccess,
  readWinesFailure,
  updateWineSuccess,
  updateWineFailure,
  deleteWineSuccess,
  deleteWineFailure,
  readWinesAfterDeleteSuccess
}
