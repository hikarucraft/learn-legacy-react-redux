import { connect } from 'react-redux'
const App = ({ count }) => {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{count}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { count: state.count }
}

export default connect(mapStateToProps)(App)
