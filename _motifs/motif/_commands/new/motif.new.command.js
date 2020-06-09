const fs = require('fs')
const motifNewConstructor = require('../../_constructors/new/motif.new.constructor')

module.exports = (scope, id, properties = {}) =>

  motifNewConstructor(scope, id, properties)