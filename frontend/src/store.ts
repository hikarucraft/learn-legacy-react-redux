import { legacy_createStore as createStore } from 'redux'
import type { countStateType } from './types/types'
// state
const initialState: countStateType = {
  count: 1,
}

//reducer
const reducer = (state: countStateType = initialState) => {
  return state
}

const store = createStore(reducer)

export default store
