'use strict'

const assert = require('assert')
const fs = require('fs')
const path = require('path')
const humanize = require('./')

const diff = JSON.parse(fs.readFileSync(path.join(__dirname, 'test-input.json'), { encoding: 'utf8' }))
const expectedOutput = JSON.parse(fs.readFileSync(path.join(__dirname, 'test-output.json'), { encoding: 'utf8' }))
const output = humanize(diff)

assert.deepEqual(output, expectedOutput)

console.log('OK')
