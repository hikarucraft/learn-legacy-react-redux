import { connect } from 'react-redux'
import type { countStateType, AppComponentProps } from './types/types'
const App = ({ countDayo }: AppComponentProps) => {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{countDayo}</p>
    </div>
  )
}

const mapStateToProps = (state: countStateType) => {
  return { countDayo: state.count }
}

export default connect(mapStateToProps)(App)
