import { legacy_createStore as createStore } from 'redux'

// state
const initialState = {
  count: 1,
}

//reducer
const reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer)

export default store
