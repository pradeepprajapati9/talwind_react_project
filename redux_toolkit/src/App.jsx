import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {

  return (
    <>
      <div className="container">
        <div className="row border border-5">
          <div className="col-8">
            <h1>Learn about redux toolkit</h1>
            <AddTodo />
            <Todos />
          </div>
        </div>
      </div>
    </>
  )
}

export default App