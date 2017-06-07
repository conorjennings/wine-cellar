'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

require('materialize-css/sass/materialize.scss')
require('materialize-css/js/materialize.js')
// require('materialize-css/js/init.js') // Turned if off to remove the donate.png error per this solution: https://github.com/Dogfalo/materialize/issues/3569

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')
