const uxHandlers = () => {
  // Show/hide/clear all authentication forms:
  $('.sign-up-section').hide()
  $('.sign-in-section').hide()
  $('.change-password-section').hide()
  $('.change-password-menu').hide()
  $('.sign-out-menu').hide()
  $('.progress').hide()
  $('.parallax-section').hide()

  // $('#change-pwd-option').on('click', function () {
  //   $('#change-password-jumbotron').show()
  //   $('.navbar-collapse').collapse('hide')
  //   $('#sign-out-jumbotron').hide()
  //   $('#add-item-jumbotron').hide()
  //   $('#instr-jumbotron').hide()
  //   $('#grocery-list-table').empty()
  //   $('#food-list-table').empty()
  //   $('#old-password').val('')
  //   $('#new-password').val('')
  // })

  // $('#sign-up-form').on('click', function () {
  //   console.log('clicked on sign-up-menu ... ')
  //   $('#sign-up-form').show()
  // })

  // Show/hide add item form
  // $('#add-item-jumbotron').hide()
  // $('#show-add-form').on('click', function () {
  //   $('#add-item-jumbotron').show()
  //   $('#instr-jumbotron').hide()
  //   $('#food-list-table').hide()
  //   $('#grocery-list-table').hide()
  //   $('#change-password-jumbotron').hide()
  //   $('#sign-out-jumbotron').hide()
  //   $('#food-item').val('')
  //   $('#purchase-date').val('')
  //   $('#exp-date').val('')
  //   $('#store-name').val('')
  //   $('#add-item-response').text('')
  // })

  // Navigate to add item form once an item has been purchased
  // $('.purchase-item').on('click', function () {
  //   $('#add-item-jumbotron').show()
  // })

  // Show/hide nav bar options
  // $('.navbar-nav').hide()
  // $('.navbar-toggle').hide()
}

module.exports = {
  uxHandlers
}
