'use strict'

const api = require('./wine-api')
const ui = require('./wine-ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const helpers = require('./../helpers/helper-events')
const store = require('../store')

const createWineOpenForm = function () {
  $('.parallax-section').hide()
  $('#create-wine-form').show()
}

const createWine = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('createWine(): data is ', data)
  if (data.wine.url_picture === 'put URL link to wine label picture here') {
    data.wine.url_picture = 'images/genericWine.png'
  }
  api.createWine(data)
    .done(ui.createWineSuccess)
    .fail(ui.createWineFailure)
}

const readWines = function (event) {
  event.preventDefault()
  api.readWines()
    .done(ui.readWinesSuccess)
    .fail(ui.readWinesFailure)
}

const updateWine = function (event) {
  event.preventDefault()
  // const id = $(this).attr('data-id')
  const data = getFormFields(event.target)
  console.log('>>>updateWine where data = ', data)
  api.updateWine(data)
    .done(ui.updateWineSuccess)
    .fail(ui.updateWineFailure)
}

const deleteWine = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  console.log('deleteWine, id is ', id)
  api.deleteWine(id)
    .done(ui.deleteWineSuccess)
    .fail(ui.deleteWineFailure)
}

// const closeTheForm = function () {
//   // helpers.closeForm($(formName)
//   console.log('got here')
//   $('.add-wine-form').val('')
//   $('#create-wine-form').hide()
// }

// const updateOneWine = function () {
//   event.preventDefault()
//   const id = $(this).attr('data-id')
//   console.log('updateOneWine() : id is: ' + id)
//   populateUpdateForm(id)
//     // .done(ui.UpdateChoreSuccess(), onGetChoresApi())
//     // .fail(ui.UpdateChoreFailure)
// }

const populateUpdateForm = function () {
  // event.preventDefault()
  const id = $(this).attr('data-id')
  const wineBottle = findWineById(id)
  // console.log('populateUpdateForm(), wineBottle = ', wineBottle)
  // console.log('populateUpdateForm(), wineBottle.name = ', wineBottle.name)
  $('#wine-id').val(wineBottle.id)
  $('#wine-polaroid-name').val(wineBottle.name)
  $('#wine-name').val(wineBottle.name)
  $('#wine-grape').val(wineBottle.grape)
  $('#wine-year').val(wineBottle.year)
  $('#wine-region').val(wineBottle.region)
  $('#wine-country').val(wineBottle.country)
  $('#wine-quantity').val(wineBottle.quantity)
  $('#wine-notes').val(wineBottle.notes)
  $('#wine-url_picture').val(wineBottle.url_picture)
  $('#wine-rating').val(wineBottle.rating)
  $('#wine-price').val(wineBottle.price)

  $('#wine-picture').attr('src', wineBottle.url_picture)
}

const findWineById = function (idToCompare) {
  let result
  let i
  for (i in store.wines) {
    const id = store.wines[i].id
    if (id - idToCompare === 0) {
      // console.log('Found a match!! store.wines[i] is ', store.wines[i])
      return store.wines[i]
    }
  }
  result
}

const wineHandlers = () => {
  $('.create-wine-open-form').on('click', createWineOpenForm)
  $('#create-wine-form').on('submit', createWine)
  // $('#create-wine-form').on('click', '.close-create-wine', closeTheForm)
  $('#read-wines').on('click', readWines)
  $(document).on('click', '.update-one-wine', populateUpdateForm)
  $('#update-wine-form').on('submit', updateWine)
  $(document).on('click', '.delete-wine', deleteWine)
}

module.exports = {
  wineHandlers
}
