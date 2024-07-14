import { legacy_createStore as createStore, combineReducers } from 'redux'
import type { countStateType, postsStateType } from './types/types'
// state
const countInitialState: countStateType = {
  count: 50,
}

const postsInitialState: postsStateType = {
  posts: [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
  ],
}

//reducer
const countReducer = (state = countInitialState) => {
  return state
}
const postsReducer = (state = postsInitialState) => {
  return state
}
const rootReducer = combineReducers({ countReducer, postsReducer })

const store = createStore(rootReducer)

export default store
