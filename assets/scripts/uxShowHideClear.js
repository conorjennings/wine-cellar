const uxHandlers = () => {
  // console.log('>>>>>>>>> calling the uxHandlers')
  // Show/hide/clear all authentication forms:
  $('.sign-up-section').hide()
  $('.sign-in-section').hide()
  $('.change-password-section').hide()
  $('.change-password-menu').hide()
  $('.sign-out-menu').hide()
  $('.progress').hide()
  $('.parallax-section').hide()
  $('#create-wine-form').hide()
  $('#update-wine-form').hide()
  $('#closeResetForm').on('click', function () {
    // console.log('>>>> Inside uxShowHideClear')
    $('#create-wine-form').hide()
    $('#wine_name').val('')
    $('wine_grape').val('')
    $('wine_year').val('')
    $('wine_region').val('')
    $('wine_country').val('')
    $('wine_quantity').val(0)
    $('wine_notes').val('')
    $('wine_url_picture').val('')
    $('wine_rating').val(0)
    $('.parallax-section').show()
  })
}

module.exports = {
  uxHandlers
}
