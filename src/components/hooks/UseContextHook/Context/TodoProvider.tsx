import React, { FC, ReactNode, useContext, useState } from 'react'
import { Todo } from '../../../../models/Todo'

type addNewTodoFunction = (title: string) => void

type Context = {
  todoList: Todo[]
  addNewTodo: addNewTodoFunction
}

interface Props {
  children: ReactNode
}

const TodosContext = React.createContext<Context>({
  todoList: [],
  addNewTodo: () => {},
})

export function useTodo() {
  return useContext(TodosContext)
}

export const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo: addNewTodoFunction = (title: string) => {
    setTodos(prev => [
      ...prev,
      {
        userId: 1,
        id: prev.length + 1,
        title: title,
        completed: false,
      },
    ])
  }

  return (
    <TodosContext.Provider
      value={{
        todoList: todos,
        addNewTodo: addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
