# humanize-deep-diff

> Human (English) description of a deep-diff output

## Install

```
$ npm install humanize-deep-diff
```

## Use

```js
'use strict'

const diff = require('deep-diff').diff;
const humanize = require('./')

const lhs = {
  name: 'my object',
  description: 'it\'s an object!',
  details: {
    it: 'has',
    an: 'array',
    with: ['a', 'few', 'elements']
  }
};

const rhs = {
  name: 'updated object',
  description: 'it\'s an object!',
  details: {
    it: 'has',
    an: 'array',
    with: ['a', 'few', 'more', 'elements', { than: 'before' }]
  }
};

const differences = diff(lhs, rhs);

const humanizedDiffs = humanize(differences)
console.log(humanizedDiffs)

// Outputs:
// [ 'Changed property name from "my object" to "updated object"',
//   'Array changed in position 4 of details.with : new element: {"than":"before"}',
//   'Array changed in position 3 of details.with : new element: "elements"',
//   'Changed property details.with.2 from "elements" to "more"' ]
```

## License

ISC