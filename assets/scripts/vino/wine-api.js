'use strict'

const config = require('../config')
const store = require('../store')

// CRUD commands in order below..

const createWine = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/wines',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const readWines = function () {
  return $.ajax({
    url: config.apiOrigin + '/wines',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWine = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/wines/' + data.wine.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteWine = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/wines/' + data.wine.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createWine,
  readWines,
  updateWine,
  deleteWine
}
