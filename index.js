'use strict'

module.exports = (diff) => {
  if (!Array.isArray(diff)) {
    diff = [diff]
  }
  return diff.map(humanizeOneDif)
}

const KINDS = {
  'N': 'New property',
  'E': 'Changed property',
  'D': 'Removed property',
  'A': 'Array changed'
}

function humanizeOneDif (diff) {
  const parts = [KINDS[diff.kind]]
  if (diff.kind === 'N') {
    parts.push('in')
    parts.push(diff.path.join('.'))
    parts.push(stringify(diff.rhs))
  } else if (diff.kind === 'D') {
    parts.push(diff.path.join('.'))
    parts.push('which had a previous value of')
    parts.push(stringify(diff.lhs))
  } else if (diff.kind === 'E') {
    parts.push(diff.path.join('.'))
    parts.push('from')
    parts.push(stringify(diff.lhs))
    parts.push('to')
    parts.push(stringify(diff.rhs))
  } else if (diff.kind === 'A') {
    parts.push('in position')
    parts.push(diff.index)
    parts.push('of')
    parts.push(diff.path.join('.'))
    parts.push(':')
    if (diff.item.kind === 'N') {
      parts.push('new element:')
      parts.push(stringify(diff.item.rhs))
    } else if (diff.item.kind === 'E') {
      parts.push('changed element from')
      parts.push(stringify(diff.item.lhs))
      parts.push('to')
      parts.push(stringify(diff.item.rhs))
    } else if (diff.item.kind === 'D') {
      parts.push('removed')
      parts.push(stringify(diff.item.lhs))
    }
  }

  return parts.join(' ')
}

function stringify(o) {
  return JSON.stringify(o)
}
