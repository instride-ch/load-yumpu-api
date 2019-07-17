import test from 'tape'
import loadYumpuApi from './'

test('resolves the promise to the `Yumpu` object', function (t) {
  t.plan(1)

  loadYumpuApi().then(function (Yumpu) {
    t.true(typeof Yumpu === 'function')
  }, t.fail)
})

test('resolves the promise to the `Yumpu` object, with support for duplicate calls', function (t) {
  t.plan(2)

  const promises = [loadYumpuApi(), loadYumpuApi()]

  Promise.all(promises).then(function (values) {
    t.equal(values[0], values[1])
    t.true(typeof values[0] === 'function')
  }, t.fail)
})
