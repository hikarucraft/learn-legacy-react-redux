import { connect } from 'react-redux'
import type { AppComponentProps } from './types/types'
import { increaseCount, decreaseCount } from './actions'
const App = ({ countDayo, postsDayo, increase, decrease }) => {
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
    countDayo: state.countReducer.count,
    postsDayo: state.postsReducer.posts,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    increase: (amount) => dispatch(increaseCount(amount)),
    decrease: (amount) => dispatch(decreaseCount(amount)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
