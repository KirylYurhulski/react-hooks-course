import React, { FC, ReactNode, useContext, useState } from 'react'
import { Todo } from '../../../../models/Todo'

type addNewTodoFunction = (title: string) => void

type todo = Pick<Todo, 'id' | 'title'>

type Context = {
  todoList: todo[]
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
  const [todos, setTodos] = useState<todo[]>([])

  const addTodo: addNewTodoFunction = (title: string) => {
    setTodos(prev => [
      ...prev,
      {
        id: prev.length + 1,
        title: title,
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
