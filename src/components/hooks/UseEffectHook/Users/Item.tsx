import { FC } from 'react'
import { User } from '../../../../models/User'

interface Props {
  entity: User
}

export const Item: FC<Props> = ({ entity }) => {
  return (
    <tr>
      <td>
        <span style={{ fontWeight: 'bold' }}>{entity.id}</span>
      </td>
      <td>{entity.name}</td>
      <td>{entity.company.name}</td>
      <td>{entity.email}</td>
      <td>{entity.phone}</td>
      <td>{`${entity.address.zipcode} ${entity.address.city} ${entity.address.street}`}</td>
      <td>{entity.website}</td>
    </tr>
  )
}
