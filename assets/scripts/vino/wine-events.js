'use strict'

const api = require('./wine-api')
const ui = require('./wine-ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const createWine = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
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

const wineHandlers = () => {
  $('#create-wine').on('submit', createWine)
  $('#read-wines').on('click', readWines)
  $(document).on('click', '.update-wine', updateWine)
  $(document).on('click', '.delete-wine', deleteWine)
}

module.exports = {
  wineHandlers
}
