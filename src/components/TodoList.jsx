import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) return <p>No todos yet. Add one!</p>









}  )    </ul>      ))}        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />      {todos.map(todo => (    <ul className="todo-list">n  return (