export const getPosts = () => async (dispatch) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  dispatch({
    type: 'GET_POSTS_DATA',
    payload: data,
  })
}
