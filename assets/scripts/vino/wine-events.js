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
  api.updateWine(data)
    .done(ui.updateWineSuccess)
    .fail(ui.updateWineFailure)
}

const deleteWine = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteWine(data)
    .done(ui.deleteWineSuccess)
    .fail(ui.deleteWineFailure)
}

// const closeTheForm = function () {
//   // helpers.closeForm($(formName)
//   console.log('got here')
//   $('.add-wine-form').val('')
//   $('#create-wine-form').hide()
// }

const updateOneWine = function () {
  event.preventDefault()
  const id = $(this).attr('data-id')
  console.log('updateOneWine() : id is: ' + id)
  populateUpdateForm(id)
    // .done(ui.UpdateChoreSuccess(), onGetChoresApi())
    // .fail(ui.UpdateChoreFailure)
}

const populateUpdateForm = function (id) {
  const wineBottle = findWineById(id)
  console.log('populateUpdateForm(), wineBottle = ', wineBottle)
  $('#the-id').val(wineBottle.id)
  $('#the-name').val(wineBottle.name)
  $('#grape').val(wineBottle.grape)
  $('#year').val(wineBottle.year)
  $('#year').val(wineBottle.region)
  $('#year').val(wineBottle.country)
  $('#year').val(wineBottle.quantity)
  $('#year').val(wineBottle.notes)
  $('#year').val(wineBottle.url_picture)
  $('#year').val(wineBottle.rating)
  $('#year').val(wineBottle.price)
  // onShowUpdateChore()
}

const findWineById = function (idToCompare) {
  let result
  debugger;
  let i
  for (i in store.wines) {
    const id = store.wines[i].id
    if (id - idToCompare === 0) {
      console.log('Found a match!! store.wines[i] is ', store.wines[i])
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
  $(document).on('click', '.update-one-wine', updateOneWine)
  $(document).on('click', '.delete-wine', deleteWine)
}

module.exports = {
  wineHandlers
}
