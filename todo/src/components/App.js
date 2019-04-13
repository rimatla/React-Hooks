import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import './App.css'

export default function App() {
  // value = state method = setState
  const [todos, setTodos] = useState([
    {
      text: 'Learn React Hooks',
      isCompleted: false
    },
    {
      text: 'Play Soccer',
      isCompleted: false
    },
    {
      text: 'Eat a nice dinner!',
      isCompleted: false
    }
  ])

  function addTodo(text) {
    // copy everything and add new text to it
    const newTodos = [...todos, { text }]
    // set state
    setTodos(newTodos)
  }

  function completeTodo(index) {
    const newTodos = [...todos]
    // find the current index and mark as completed
    newTodos[index].isCompleted = true
    // set state
    setTodos(newTodos)
  }

  function deleteTodo(index) {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}
