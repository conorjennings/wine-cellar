'use strict'
const store = require('../store.js')
const wineListingHandleBars = require('../templates/wine-listing.handlebars')

const createWineSuccess = (data) => {
  store.item = data.item
  $('#create-wine-form').hide()
  $('#create-wine-form').trigger('reset')
  // Materialize.updateTextFields()
  $('.parallax-section').show()
}

const createWineFailure = (error) => {
  console.log('createWineFailure(), error is ', error)
  console.error(error)
}

const readWinesSuccess = (data) => {
  const showWinesInCellar = wineListingHandleBars({ wines: data.wines })
  $('#wine-collection').append(showWinesInCellar)
}

const readWinesFailure = (error) => {
  console.error(error)
}

const updateWineSuccess = (data) => {
  console.log(data)
}

const updateWineFailure = (error) => {
  console.error(error)
}

const deleteWineSuccess = (data) => {
  console.log(data)
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
