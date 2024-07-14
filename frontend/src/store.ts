import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
// state
const initialState = {
  posts: [],
}
//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_DATA':
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
const store = createStore(reducer, applyMiddleware(thunk))

export default store
