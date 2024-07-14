import { connect } from 'react-redux'
import type { AppComponentProps, arrayStateType } from './types/types'
const App = ({ countDayo, postsDayo }: AppComponentProps) => {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{countDayo}</p>
      <ul>
        {postsDayo.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state: arrayStateType) => {
  return { countDayo: state.count, postsDayo: state.posts }
}

export default connect(mapStateToProps)(App)
