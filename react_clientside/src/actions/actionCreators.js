// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(tripId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    tripId,
    author,
    comment
  }
}

// remove comment

export function removeComment(tripId, i) {
  return {
    type: 'REMOVE_COMMENT',
    tripId,
    i
  }
}
