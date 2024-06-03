import { useCallback, useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Items } from './Items'

type GenerateItemsFunc = (inc: number) => Array<{ id: number; value: string }>

export const UseCallbackHook = () => {
  const [lines, setLines] = useState<number>(0)
  const [colorProperty, setColorProperty] = useState<boolean>(true)

  const style = useMemo(
    () => ({
      color: colorProperty ? 'black' : 'red',
    }),
    [colorProperty],
  )

  const generateItems: GenerateItemsFunc = useCallback(
    (inc: number) => {
      console.log('Use Callback: generate Items')
      return new Array(lines)
        .fill('')
        .map((_, index) => ({ id: index, value: `Item: ${index + inc}` }))
    },
    [lines],
  )

  return (
    <>
      <span className="fw-bold" style={style}>
        Lines: {lines}
      </span>

      <Button
        variant="success"
        className="m-4"
        onClick={() => setLines(prev => prev + 1)}
      >
        Add Item
      </Button>

      <Button
        variant="danger"
        onClick={() => setLines(prev => (prev === 0 ? 0 : prev - 1))}
      >
        Delete Item
      </Button>

      <Button
        variant="primary"
        className="m-4"
        onClick={() => setColorProperty(prev => !prev)}
      >
        Change color
      </Button>

      <hr />

      <Items generateItems={generateItems} />
    </>
  )
}
