'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

require('materialize-css/sass/materialize.scss')
require('materialize-css/js/materialize.js')
require('materialize-css/js/init.js')  // Need this to allow materialize-css to use the JS functionality

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')
