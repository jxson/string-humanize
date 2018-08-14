
var test = require('tape')
var humanize = require('./')

test('humanize(string)', function (assert) {
  assert.equal(humanize('super_snake_case'), 'Super snake case')
  assert.equal(humanize('capitalizedCamelCase'), 'Capitalized camel case')
  assert.equal(humanize('hyphen-case'), 'Hyphen case')
  assert.equal(humanize('no-extensions-here.md'), 'No extensions here')
  assert.equal(humanize('lower cased phrase'), 'Lower cased phrase')
  assert.equal(humanize('  so many  spaces  '), 'So many spaces')
  assert.equal(humanize(123), '123')
  assert.equal(humanize(''), '')
  assert.equal(humanize(null), '')
  assert.equal(humanize(undefined), '')
  assert.end()
})
