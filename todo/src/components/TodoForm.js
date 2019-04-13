import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(value)
    // clear form input data
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="add todo task"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}
