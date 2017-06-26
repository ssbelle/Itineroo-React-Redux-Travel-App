import commentsData from '../data/comments';
// console.log('commentsdata', commentsData)

function postComments(state = commentsData, action) {
  switch(action.type){
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = commentsData, action) {
  if(typeof action.tripId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.tripId]: postComments(state[action.tripId], action)
    }
  }
  return state;
}

export default comments;
