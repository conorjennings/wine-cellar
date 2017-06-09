'use strict'

const api = require('./wine-api')
const ui = require('./wine-ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const createWineOpenForm = function () {
  $('.parallax-section').hide()
  $('.create-wine-section').show()
  $('.jumbo-quote').hide()
  $('#grape_year').attr('max', new Date().getFullYear())  // Set the max vintage to the current year
}

const createWine = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.wine.url_picture === '') {
    data.wine.url_picture = 'https://raw.githubusercontent.com/conorjennings/wine-cellar/master/assets/images/genericWine.png'
  }
  api.createWine(data)
  .then(function (data) {
    ui.createWineSuccess()
    onReadWinesApi()
  })
  .catch(ui.createWineFailure)
}

const onReadWines = (event) => {
  event.preventDefault()
  $('.jumbo-quote').hide()
  onReadWinesApi()
}

const onReadWinesApi = () => {
  api.readWines()
    .then(ui.readWinesSuccess)
    .catch(ui.readWinesFailure)
}

const onReadWinesAfterDeleteApi = () => {
  api.readWines()
    .then(ui.readWinesAfterDeleteSuccess)
    .catch(ui.readWinesFailure)
}
const updateWine = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateWine(data)
  .then(function (data) {
    ui.updateWineSuccess()
    onReadWinesApi()
  })
  .catch(ui.updateWineFailure)
}

const deleteWine = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  api.deleteWine(id)
  .then(function (id) {
    ui.deleteWineSuccess(id)
    onReadWinesAfterDeleteApi()
  })
  .catch(ui.deleteWineFailure)
}

const populateUpdateForm = function () {
  $('.parallax-section').hide()
  $('.update-wine-section').show()
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
  $('#wine-year').attr('max', new Date().getFullYear())  // Set the max vintage to the current year
}

const findWineById = function (idToCompare) {
  let result
  let i
  for (i in store.wines) {
    const id = store.wines[i].id
    if (id - idToCompare === 0) {
      return store.wines[i]
    }
  }
  result
}

const onHideCreateWine = function () {
  $('.create-wine-section').hide()
  $('.parallax-section').show()
}

const onHideUpdateWine = function () {
  $('.update-wine-section').hide()
  $('.parallax-section').show()
  // $('#wine-collection').hide()
}

const wineHandlers = () => {
  $('.create-wine-open-form').on('click', createWineOpenForm)
  $('#create-wine-form').on('submit', createWine)
  // $(document).on('click', '#create-wine-form', createWine)
  $('#create-wine-form').on('reset', onHideCreateWine)
  // $('.wine-read-list').on('click', onReadWines)
  $(document).on('click', '.wine-read-list', onReadWines)
  $(document).on('click', '.update-one-wine', populateUpdateForm)
  $('#update-wine-form').on('submit', updateWine)
  $('#update-wine-form').on('reset', onHideUpdateWine)
  $(document).on('click', '.delete-wine', deleteWine)
}

module.exports = {
  wineHandlers
}
