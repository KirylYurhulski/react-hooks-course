import { FC } from 'react'
import { Todo } from '../../../../models/Todo'

interface Props {
  entity: Todo
}

export const Item: FC<Props> = ({ entity }) => {
  
  return (
    <tr key={entity.id}>
      <td>
        <span style={{ fontWeight: 'bold' }}>{entity.id}</span>
      </td>
      <td>{entity.title}</td>
      <td>
        { entity.completed ? <span style={{ color: 'green' }}>Completed</span> : <span style={{ color: 'red' }}>In Work</span> }
      </td>
    </tr>
  )
}