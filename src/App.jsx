import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import useTodos from './hooks/useTodos'

function App() {
  const [inputValue, setInputValue] = useState('')
  const { todos, addTodo, toggleTodo, deleteTodo, getPendingCount } = useTodos()

  const handleAddTodo = (e) => {
    e.preventDefault()
    addTodo(inputValue)
    setInputValue('')
  }

  const pendingCount = getPendingCount()

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Mi Lista de Tareas
      </h1>

      <TodoForm
        inputValue={inputValue}
        onInputChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleAddTodo}
      />

      <div className="mb-4">
        <p className="text-gray-600">
          Tareas pendientes: <span className="font-bold">{pendingCount}</span>
        </p>
      </div>

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App
