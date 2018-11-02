const test = require('tape')
const loadYumpuAPI = require('./')

test('resolves the promise to the `Yumpu` object with support for duplicate calls', function (t) {
  t.plan(2)

  const promises = [loadYumpuAPI(), loadYumpuAPI()]

  Promise.all(promises).then(function (values) {
    t.equal(values[0], values[1])
    t.true(typeof values[0] === 'function')
  }, t.fail)
})
