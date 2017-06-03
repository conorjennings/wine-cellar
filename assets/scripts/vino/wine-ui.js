'use strict'
const store = require('../store.js')
const wineListingHandleBars = require('../templates/wine-listing.handlebars')

const createWineSuccess = (data) => {
  store.item = data.item
  // $('#add-item-response').text('Success! Add another item or click FOOD to see all items.')
}

const createWineFailure = (error) => {
  console.error(error)
  // $('#add-item-response').text('All field forms are required. Please try again.')
}

const readWinesSuccess = (data) => {
  // console.log(data)
  // console.log('getAllItems worked!')
  // $('#show-food-list').empty()
  // $('#show-grocery-list').empty()
  const showWinesInCellar = wineListingHandleBars({ wines: data.wines })
  $('#wine-collection').append(showWinesInCellar)
  // $('#add-item-jumbotron').hide()
  // $('#instr-jumbotron').hide()
  // $('#change-password-jumbotron').hide()
  // $('#sign-out-jumbotron').hide()
}

const readWinesFailure = (error) => {
  console.error(error)
}

const updateWineSuccess = (data) => {
  console.log(data)
  // console.log('updateWine worked!')
  // $('#show-food-list').empty()
}

const updateWineFailure = (error) => {
  console.error(error)
}

const deleteWineSuccess = (data) => {
  console.log(data)
  // $('#show-food-list').empty()
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
