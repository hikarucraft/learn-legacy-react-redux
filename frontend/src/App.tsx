import store from './store'

const App = () => {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count:{store.getState().count}</p>
    </div>
  )
}

export default App
