import { connect } from 'react-redux'
const App = ({ countDayo }) => {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{countDayo}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { countDayo: state.count }
}

export default connect(mapStateToProps)(App)
