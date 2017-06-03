'use strict'

const store = require('../store')
const helpers = require('./../helpers/helper-events')

const wineQuotes = [
  `<blockquote class="center-align blockquote-wine">
    <p>"I cook with wine, sometimes I even add it to the food."</p>
    <footer>"W.C. Fields"</footer>
  </blockquote>`,
  `<blockquote class="center-align blockquote-wine">
    <p>"Wine makes daily living easier, less hurried, with fewer tensions and more tolerance"</p>
    <footer>Benjamin Franklin</footer>
  </blockquote>`,
  `<blockquote class="center-align blockquote-wine">
    <p>"I don't go by the ratings. I buy wine that tastes good. Statistically, anybody's ability to predict what will be a good wine a decade from now is limited"</p>
    <footer>Richard Thaler</footer>
  </blockquote>`,
  `<blockquote class="center-align blockquote-wine">
    <p>"Nothing makes the future look so rosy as to contemplate it through a glass of Chambertin"</p>
    <footer>Napoleon Bonaparte</footer>
  </blockquote>`,
  `<blockquote class="center-align blockquote-wine">
    <p>"What wine goes with Captain Crunch?"</p>
    <footer>George Carlin</footer>
  </blockquote>`,
  `<blockquote class="center-align blockquote-wine">
    <p>"I can certainly see that you know your wine. Most of the guests who stay here wouldn’t know the difference between Bordeaux and Claret."</p>
    <footer>Basil Fawlty, Fawlty Towers</footer>
  </blockquote>`
]

const onLoadRandomWineQuote = function (wineQuotes) {
  const options = wineQuotes.length
  const random = Math.floor(Math.random() * (options - 0 + 1)) + 0
  const quote = wineQuotes[random]
  return quote
}

const signUpSuccess = (data) => {
  store.user = data.user
  const msg = $('<h6>Sign Up successful. Please sign in.</h6>')
  Materialize.toast(msg, 2000, 'rounded green')
  $('#sign-up-form').trigger('reset')
  $('.sign-in-section').show()
  $('.sign-up-section').hide()
  helpers.setFocusToTextBox('sign-in-form-email')
  $('.progress').hide()
}

const signUpFailure = (error) => {
  console.error('signUpFailure, error is ', error)
  const errorMessage = $('<h6>Either your password doesn\'t  match or the user id is taken</h6>')
  Materialize.toast(errorMessage, 2000, 'rounded red')
  $('#sign-up-form').trigger('reset')
  helpers.setFocusToTextBox('sign-up-form-email')
  $('.progress').hide()
}

// Important to use tokens (change each time you sign in) over using IDs
const signInSuccess = (data) => {
  store.user = data.user
  const msg = $('<h6>You have successfully signed in..</h6>')
  Materialize.toast(msg, 2000, 'rounded green')
  $('#sign-in-form').trigger('reset')
  $('.sign-in-section').hide()
  $('.parallax-section').show()
  $('#wine-video').hide()
  $('.display-current-user').text('Signed in as ' + data.user.email)
  $('.video-container').hide()
  $('.sign-out-menu').show()
  $('.sign-in-menu').hide()
  $('.sign-up-menu').hide()
  $('.change-password-menu').show()
  $('.sign-up-section').hide()
  const randomWineQuote = onLoadRandomWineQuote(wineQuotes)
  $('.random-wine-quote').append(randomWineQuote)
  $('.chore-menu').show()
  $('.home-menu').show()
  $('.progress').hide()
}

const signInFailure = (error) => {
  console.error('signInFailure, error is ', error)
  const errorMessage = $('<h6>Incorrect Email or Password</h6>')
  Materialize.toast(errorMessage, 2000, 'rounded red')
  $('#sign-in-form').trigger('reset')
  helpers.setFocusToTextBox('sign-in-form-email')
  $('.progress').hide()
}

const signOutSuccess = () => {
  store.user = null // this gets rid of data stored in cache
  const msg = $('<h6>You have successfully signed out..</h6>')
  Materialize.toast(msg, 2000, 'rounded green')

  $('.sign-up-menu').show()
  $('.sign-in-menu').show()
  $('.sign-out-menu').hide()
  $('.display-current-user').text('')
  $('.random-wine-quote').text('')
  $('#wine-video').show()
  $('.sign-in-section').show()
  $('.parallax-section').hide()
  $('#wine-collection').text('')

  $('#sign-up-form').show()
  $('.sign-in-menu').show()
  $('.change-password-menu').hide()
  $('.sign-out-menu').hide()
  $('.wine-menu').hide()
  $('.wine-get-menu').hide()
  $('.wine-get-one-menu').hide()
  $('.wine-update-menu').hide()
  $('.wine-delete-menu').hide()
  $('.wine-add-menu').hide()
  $('.wine-clear-menu').hide()

  $('.change-password-section').hide()
  $('.sign-in-section').hide()
  $('.sign-up-section').hide()
  $('.delete-wine-section').hide()
  $('.update-wine-section').hide()
  $('.create-wine-section').hide()
  $('.get-one-wine-section').hide()
  // $('#sign-in-form').trigger('reset')
  // $('#sign-up-form').trigger('reset')
  // $('#change-password').trigger('reset')
  $('#wine-content').empty()
  $('#one-wine-content').empty()
}

const signOutFailure = (error) => {
  console.error('signOutFailure error is ', error)
}

const changePasswordSuccess = () => {
  const msg = $('<h6>Password successfully changed</h6>')
  Materialize.toast(msg, 2000, 'rounded green')
  $('#change-password-form').trigger('reset')
  $('.change-password-section').hide()
  $('.progress').hide()
}

const changePasswordFailure = (error) => {
  console.error('changePasswordFailure, error is ', error)
  const errorMessage = $('<h6>Password Reset Failure</h6>')
  Materialize.toast(errorMessage, 2000, 'rounded red')
  $('#change-password-form').trigger('reset')
  helpers.setFocusToTextBox('old-password')
  $('.progress').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
