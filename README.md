
# string-humanize [![Build Status](https://travis-ci.org/jxson/string-humanize.svg?branch=master)](https://travis-ci.org/jxson/string-humanize)

Transforms the input into a human friendly form (just the .humanize() function from string.js).

[![NPM](https://nodei.co/npm/string-humanize.png)](https://nodei.co/npm/string-humanize/)

[![browser support](https://ci.testling.com/jxson/string-humanize.png)](https://ci.testling.com/jxson/string-humanize)

I noticed that there was a TODO in [string.js][string-js-todo] to break things up into smaller modules so I thought I would help out.

# Installation

    npm install string-humanize

# humanize(string)

Transforms the input into a human friendly form

    var humanize = require('string-humanize')

    humanize('super_snake_case')      // Super snake case
    humanize('capitalizedCamelCase')  // Capitalized camel case
    humanize('hyphen-case')           // 'Hyphen case'
    humanize('no-extensions-here.md') // 'No extensions here'
    humanize('lower cased phrase')    // 'Lower cased phrase'
    humanize('  so many  spaces  ')   // 'So many spaces'
    humanize(123)                     // '123'
    humanize('')                      // ''
    humanize(null)                    // ''
    humanize(undefined)               // ''

# Contributing

Fork and send a PR if you see fit, make sure to report any [issues][].

# LICENSE (MIT)

Copyright (c) Jason Campbell ("Author")

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[string-js-todo]: https://github.com/jprichardson/string.js#roadmap-to-v20
[issues]: https://github.com/jxson/string-capitalize/issues
