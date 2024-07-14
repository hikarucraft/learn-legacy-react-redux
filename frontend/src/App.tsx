import { connect } from 'react-redux'
import type { AppComponentProps } from './types/types'
import { increaseCount, decreaseCount } from './actions'
import { useSelector, useDispatch } from 'react-redux'
const App = () => {
  const countDayo = useSelector((state) => state.countReducer.count)
  const postsDayo = useSelector((state) => state.postsReducer.posts)
  const dispatch = useDispatch()
  const increase = (amount) => {
    dispatch(increaseCount(amount))
  }
  const decrease = (amount) => {
    dispatch(decreaseCount(amount))
  }
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{countDayo}</p>
      <button onClick={(e) => increase(1)}>+1</button>
      <button onClick={(e) => increase(2)}>+2</button>
      <button onClick={(e) => decrease(1)}>-1</button>
      <button onClick={(e) => decrease(2)}>-2</button>
      <ul>
        {postsDayo.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    _countDayo: state.countReducer.count,
    _postsDayo: state.postsReducer.posts,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    _increase: (amount) => dispatch(increaseCount(amount)),
    _decrease: (amount) => dispatch(decreaseCount(amount)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
