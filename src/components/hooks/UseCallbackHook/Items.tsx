import { FC, useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

interface Props {
  generateItems: Function
}

export const Items: FC<Props> = ({ generateItems }) => {
  const [items, setItems] = useState<{ id: number; value: string }[]>([])

  useEffect(() => {
    console.log('Use Callback: Prepare Items Display')
    setItems(generateItems(1))
  }, [generateItems])

  return (
    <ListGroup>
      {items.map((item: { id: number; value: string }) => (
        <ListGroup.Item key={item.id}>{item.value}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}
