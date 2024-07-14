export const INCREASE_COUNT = '@@myapp/INCREASE_COUNT'
export const DECREASE_COUNT = '@@myapp/DECREASE_COUNT'
export const increaseCount = (amount) => ({
  type: INCREASE_COUNT,
  payload: amount,
})
export const decreaseCount = (amount) => ({
  type: DECREASE_COUNT,
  payload: amount,
})
