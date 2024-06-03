import { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'

function calculate(value: number): number {
  let index = 0
  while (index < 10000) {
    index++
  }
  return value + 10
}

export const UseMemoHook = () => {
  const [value, setValue] = useState<number>(0)
  const [colorProperty, setColorProperty] = useState<boolean>(true)

  const computedProperty = useMemo(() => calculate(value), [value])

  const style = useMemo(
    () => ({
      color: colorProperty ? 'black' : 'red',
    }),
    [colorProperty],
  )

  return (
    <>
      <span className="fw-bold">Value: {value}</span>
      <Button
        variant="success"
        className="m-4"
        onClick={() => setValue(prev => prev + 1)}
      >
        Increment
      </Button>
      <Button variant="danger" onClick={() => setValue(prev => prev - 1)}>
        Decrement
      </Button>
      <Button
        variant="primary"
        className="m-4"
        onClick={() => setColorProperty(prev => !prev)}
      >
        Change color
      </Button>
      <hr />
      <span className="fw-bold" style={style}>
        Computed Property(value + 10): {computedProperty}
      </span>
    </>
  )
}
