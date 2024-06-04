import React, { useState } from 'react'
import { Create } from './Todos/Create'
import { Todos as TodoList } from './Todos/Todos'
import { TodoProvider } from './Context/TodoProvider'

export const UseContextHook = () => {
  return (
    <TodoProvider>
      <Create />
      <hr />
      <TodoList />
    </TodoProvider>
  )
}
