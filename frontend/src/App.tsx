import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './actions'
const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  return (
    <div>
      <h1>Redux Learn</h1>
      <button
        onClick={() => {
          dispatch(getPosts())
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
