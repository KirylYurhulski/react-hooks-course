import { useState } from 'react'
import { Button } from 'react-bootstrap'

const calculateInitialCounter = () => Math.trunc( Math.random() * 10 )

export const UseStateHook = () => {
  const [counter, setCounter] = useState(() => calculateInitialCounter())

  return (
    <>
      <span className="fw-bold">Counter: {counter}</span>

      <Button
        variant="success"
        className="m-4"
        onClick={() => setCounter(prev => prev + 1)}
      >
        Increment
      </Button>

      <Button variant="danger" onClick={() => setCounter(prev => prev - 1)}>
        Decrement
      </Button>
    </>
  )
}
