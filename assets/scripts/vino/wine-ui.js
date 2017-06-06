'use strict'
const store = require('../store.js')
const wineListingHandleBars = require('../templates/wine-listing.handlebars')

const createWineSuccess = (data) => {
  // console.log('createWineSuccess(): data is ', data)
  // store.wines = data.wines
  // console.log('createWineSuccess():  store is ', store)
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
  console.log('readWinesSuccess(): data is ', data)
  store.wines = data.wines
  //  console.log('readWinesSuccess():  store is ', store)
}

const readWinesFailure = (error) => {
  console.error(error)
}

const updateWineSuccess = () => {
  console.log('updateWineSuccess')
}

const updateWineFailure = (error) => {
  console.error(error)
}

const deleteWineSuccess = () => {
  console.log('deleteWineSuccess')
}

const deleteWineFailure = (error) => {
  console.log('deleteWineFailure, error is ', error)
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
