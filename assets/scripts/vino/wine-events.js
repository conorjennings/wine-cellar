'use strict'

const api = require('./wine-api')
const ui = require('./wine-ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const helpers = require('./../helpers/helper-events')

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

const closeTheForm = function () {
  // helpers.closeForm($(formName)
  console.log('got here')
  $('.add-wine-form').val('')
  $('#create-wine-form').hide()
}

const wineHandlers = () => {
  $('.create-wine-open-form').on('click', createWineOpenForm)
  $('#create-wine-form').on('submit', createWine)
  $('#create-wine-form').on('click', '.close-create-wine', closeTheForm)
  $('#read-wines').on('click', readWines)
  $(document).on('click', '.update-wine', updateWine)
  $(document).on('click', '.delete-wine', deleteWine)
}

module.exports = {
  wineHandlers
}
