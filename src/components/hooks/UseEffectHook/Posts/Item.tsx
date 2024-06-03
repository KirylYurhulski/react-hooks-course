import { FC } from 'react'
import { Post } from '../../../../models/Post'

interface Props {
  entity: Post
}

export const Item: FC<Props> = ({ entity }) => {
  
  return (
    <tr>
      <td>
        <span style={{ fontWeight: 'bold' }}>{entity.id}</span>
      </td>
      <td>{entity.title}</td>
    </tr>
  )
}