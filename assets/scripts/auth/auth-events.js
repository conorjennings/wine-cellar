'use strict'

// The following is required to turn off an ESLinter error on Materialize.toast.
// It has no impact on any functionality in either localhost or on deployed site.
// Source: http://eslint.org/docs/rules/no-undef
/* global Materialize */
/* eslint no-undef: "error" */

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./auth-api')
const ui = require('./auth-ui')
const helpers = require('./../helpers/helper-events')

const onSignUp = function (event) {
  event.preventDefault()
  // $('.progress').show()
  const data = getFormFields(event.target)

  if (data.credentials.password !== data.credentials.password_confirmation) {
    const errorMessage = $('<h6>Either your password doesn\'t  match or the user id is taken</h6>')
    Materialize.toast(errorMessage, 2000, 'rounded red')
    $('#sign-up-form').trigger('reset')
    helpers.setFocusToTextBox('sign-up-form-email')
  } else {
    api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFailure)
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  $('.progress').show()
  const data = getFormFields(this)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  $('.progress').show()
  const data = getFormFields(event.target)
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.changePasswordFailure)
}

const onShowSignIn = function () {
  $('.sign-in-section').show()
  $('.sign-up-section').hide()
  $('#sign-in-form-email').val('')
  $('#sign-in-form-password').val('')
  $('#sign-up-form-email').val('')
  $('#sign-up-form-password').val('')
  $('#sign-up-form-password-confirm').val('')
}

const onShowSignUp = function () {
  $('.sign-up-section').show()
  $('.sign-in-section').hide()
  $('#sign-up-form-email').val('')
  $('#sign-up-form-password').val('')
  $('#sign-up-form-password-confirm').val('')
}

const onShowChangePassword = function () {
  $('.change-password-section').show()
  $('.wine-cellar-section').hide()
  $('.delete-wine-section').hide()
  $('.update-wine-section').hide()
  $('.create-wine-section').hide()
  $('#create-wine-form').trigger('reset')
}

const onHideChangePassword = function () {
  $('.change-password-section').hide()
}

const authHandlers = () => {
  $('.change-password-menu').on('click', onShowChangePassword)
  $('#change-password-form').on('submit', onChangePassword)
  $('#change-password').on('reset', onHideChangePassword)
  $('.sign-up-menu').on('click', onShowSignUp)
  $('#sign-up-form').on('submit', onSignUp)
  $('.sign-in-menu').on('click', onShowSignIn)
  $('#sign-in-form').on('submit', onSignIn)
  $('.sign-out-menu').on('click', onSignOut)
}

module.exports = {
  authHandlers
}
