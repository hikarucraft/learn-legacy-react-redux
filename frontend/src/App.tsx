import { connect } from 'react-redux'
import type { AppComponentProps } from './types/types'
const App = ({ countDayo, postsDayo, increase, decrease }) => {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{countDayo}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
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
    increase: () => dispatch({ type: 'INCREASE_COUNT' }),
    decrease: () => dispatch({ type: 'DECREASE_COUNT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
