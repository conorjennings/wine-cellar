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
  readWines()
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
  readWines()
}

// const deleteWine = function (event) {
//   event.preventDefault()
//   const id = $(this).attr('data-id')
//   console.log('deleteWine, id is ', id)
//   api.deleteWine(id)
//     .done(ui.deleteWineSuccess)
//     readWines()
//     .fail(ui.deleteWineFailure)
// }

const deleteWine = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  console.log('deleteWine, id is ', id)
  api.deleteWine(id)
  .then(function (id) {
    ui.deleteWineSuccess(id)
    readWines()
  })
  .catch(ui.deleteWineFailure)
}

const populateUpdateForm = function () {
  $('.parallax-section').hide()
  $('#update-wine-form').show()
  // event.preventDefault()
  const id = $(this).attr('data-id')
  const wineBottle = findWineById(id)
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

const onHideCreateWine = function () {
  $('#create-wine-form').hide()
  $('.parallax-section').show()
}

const onHideUpdateWine = function () {
  $('#update-wine-form').hide()
  $('.parallax-section').show()
  $('#wine-collection').hide()
}

const wineHandlers = () => {
  $('.create-wine-open-form').on('click', createWineOpenForm)
  $('#create-wine-form').on('submit', createWine)
  $('#create-wine-form').on('reset', onHideCreateWine)
  $('#read-wines').on('click', readWines)
  $(document).on('click', '.update-one-wine', populateUpdateForm)
  $('#update-wine-form').on('submit', updateWine)
  $('#update-wine-form').on('reset', onHideUpdateWine)
  $(document).on('click', '.delete-wine', deleteWine)
}

module.exports = {
  wineHandlers
}
