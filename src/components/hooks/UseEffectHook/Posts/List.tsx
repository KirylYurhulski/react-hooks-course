import { FC } from 'react'
import { Table } from 'react-bootstrap'
import { Post } from '../../../../models/Post'
import { Item } from './Item'

interface Props {
  title: string
  entitySet: Post[]
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