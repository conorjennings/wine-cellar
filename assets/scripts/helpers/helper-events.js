'use strict'

const setFocusToTextBox = function(IdName) {
  document.getElementById(IdName).focus()
}

const closeForm = function(formName) {
  //  formName.close()
  $('.add-wine-form').val('')
  $('#create-wine-form').hide()
}

// Using Durstenfeld shuffle algorithm.
const onLoadRandomWineQuote = function() {
  let i
  const wineQuotes = [
    `<blockquote class="center-align blockquote-wine">
      <p>"I cook with wine, sometimes I even add it to the food."</p>
      <footer>- W.C. Fields</footer>
    </blockquote>`,
    `<blockquote class="center-align blockquote-wine">
      <p>"Wine makes daily living easier, less hurried, with fewer tensions and more tolerance"</p>
      <footer>- Benjamin Franklin</footer>
    </blockquote>`,
    `<blockquote class="center-align blockquote-wine">
      <p>"Nothing makes the future look so rosy as to contemplate it through a glass of Chambertin"</p>
      <footer>- Napoleon Bonaparte</footer>
    </blockquote>`,
    `<blockquote class="center-align blockquote-wine">
      <p>"What wine goes with Captain Crunch?"</p>
      <footer>- George Carlin</footer>
    </blockquote>`,
    `<blockquote class="center-align blockquote-wine">
      <p>"I can certainly see that you know your wine. Most of the guests who stay here wouldn’t know the difference between Bordeaux and Claret."</p>
      <footer>- Basil Fawlty, Fawlty Towers</footer>
    </blockquote>`,
    `<blockquote class="center-align blockquote-wine">
      <p>"I tried cooking with wine. Didn’t go so well. After 5 glasses, I forgot why I was even in the kitchen"</p>
      <footer>- Anonymous</footer>
    </blockquote>`,
    `<blockquote class="center-align blockquote-wine">
      <p>"Seven days without wine makes one weak."</p>
      <footer>- Anonymous</footer>
    </blockquote>`,
    `<blockquote class="center-align blockquote-wine">
      <p>"Wine is a living liquid containing no preservatives. Its life cycle comprises youth, maturity, old age, and death. When not treated with reasonable respect it will sicken and die"</p>
      <footer>- Julia Child</footer>
    </blockquote>`
  ]

  for (i = wineQuotes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = wineQuotes[i]
    wineQuotes[i] = wineQuotes[j]
    wineQuotes[j] = temp
  }
  return wineQuotes[i]
}

module.exports = {
  setFocusToTextBox,
  closeForm,
  onLoadRandomWineQuote
}
