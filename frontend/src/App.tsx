import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    dispatch({
      type: 'GET_POSTS_DATA',
      payload: data,
    })
  }

  return (
    <div>
      <h1>Redux Learn</h1>
      <button
        onClick={() => {
          getPosts()
        }}
      >
        fetchAll
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
