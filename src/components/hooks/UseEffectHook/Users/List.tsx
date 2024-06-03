import { FC } from 'react'
import { Table } from 'react-bootstrap'
import { User } from '../../../../models/User'
import { Item } from './Item'

interface Props {
  title: string
  entitySet: User[]
}

export const List: FC<Props> = ({ title, entitySet }) => {
  return (
    <>
      <h1>{title}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Web site</th>
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
