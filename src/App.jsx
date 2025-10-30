import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoCounter from './components/TodoCounter'
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

      <TodoCounter count={pendingCount} />

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  )
}

export default App
