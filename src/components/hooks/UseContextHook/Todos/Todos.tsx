import { Table } from 'react-bootstrap'
import { useTodo } from '../Context/TodoProvider'

export const Todos = () => {
  const todo = useTodo()

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {todo.todoList.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
