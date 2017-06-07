'use strict'
const store = require('../store.js')
const wineListingHandleBars = require('../templates/wine-listing.handlebars')

const createWineSuccess = (data) => {
  // store.wines = data.wines
  $('#create-wine-form').hide()
  $('#create-wine-form').trigger('reset')
  $('.parallax-section').show()
}

const createWineFailure = (error) => {
  console.error(error)
}

const readWinesSuccess = (data) => {
  const showWinesInCellar = wineListingHandleBars({ wines: data.wines })
  $('#wine-collection').html(showWinesInCellar)
  store.wines = data.wines
}

const readWinesFailure = (error) => {
  console.error(error)
}

const updateWineSuccess = () => {
  $('#update-wine-form').hide()
  $('#update-wine-form').trigger('reset')
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
