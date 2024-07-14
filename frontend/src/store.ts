import { legacy_createStore as createStore } from 'redux'
import type { arrayStateType } from './types/types'
// state
const initialState: arrayStateType = {
  count: 1,
  posts: [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
  ],
}

//reducer
const reducer = (state: arrayStateType = initialState) => {
  return state
}

const store = createStore(reducer)

export default store
