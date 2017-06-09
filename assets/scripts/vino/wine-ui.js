'use strict'
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

const readWinesSuccess = (data) => {
  store.wines = data.wines
  // Sort wines by ID so they are always in the same order.
  data.wines.sort(function (a, b) {
    return a.id - b.id
  })
  // const showWinesInCellar = wineListingHandleBars({ wines: data.wines })
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
  deleteWineFailure
}
