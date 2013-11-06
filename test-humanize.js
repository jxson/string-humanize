
const assert = require('assert')
const humanize = require('./index.js')

describe('humanize(string)', function(){
  it('converts snake case', function(){
    assert.equal(humanize('super_snake_case'), 'Super snake case')
  })

  it('converts camel case', function(){
    assert.equal(humanize('capitalizedCamelCase'), 'Capitalized camel case')
  })

  it('converts hyphen separators', function(){
    assert.equal(humanize('hyphen-case'), 'Hyphen case')
  })

  it('removes extensions', function(){
    assert.equal(humanize('no-extensions-here.md'), 'No extensions here')
  })

  it('capitalizes lower case phrases', function(){
    assert.equal(humanize('lower cased phrase'), 'Lower cased phrase')
  })

  it('zaps extra spaces', function(){
    assert.equal(humanize('  so many  spaces  '), 'So many spaces')
  })

  it('coerces numbers', function(){
    assert.equal(humanize(123), '123')
  })

  it('handles bad input gracefully', function(){
    assert.equal(humanize(''), '')
    assert.equal(humanize(null), '')
    assert.equal(humanize(undefined), '')
  })
})
