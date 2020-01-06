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