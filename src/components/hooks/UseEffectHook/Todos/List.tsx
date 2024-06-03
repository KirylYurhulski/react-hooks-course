import { FC } from 'react'
import { Table } from 'react-bootstrap'
import { Todo } from '../../../../models/Todo'
import { Item } from './Item'

interface Props {
  title: string
  entitySet: Todo[]
}

export const List: FC<Props> = ({ title, entitySet }) => {
  return (
    <>
      <h1>{title}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {entitySet.map(item => (
            <Item key={item.id} entity={item} />
          ))}
        </tbody>
      </Table>
    </>
  )
}