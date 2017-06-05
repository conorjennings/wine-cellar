'use strict'

const setFocusToTextBox = function (IdName) {
  document.getElementById(IdName).focus()
}

const closeForm = function (formName) {
//  formName.close()
  console.log('>>>>closeForm')
  $('.add-wine-form').val('')
  $('#create-wine-form').hide()
}

module.exports = {
  setFocusToTextBox,
  closeForm
}
