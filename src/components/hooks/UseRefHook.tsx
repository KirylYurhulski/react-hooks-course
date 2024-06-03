import { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export const UseRefHook = () => {
  const [renderCounter, setRenderCount] = useState<number>(0)
  const inputControl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputControl.current?.addEventListener('input', onInput)
    return () => inputControl.current?.removeEventListener('input', onInput)
  }, [])

  const onInput = () => {
    setRenderCount(prev => prev + 1)
  }

  return (
    <>
      <span className="fw-bold">Render Counter: {renderCounter}</span>
      <Form.Control
        ref={inputControl}
        type="text"
        placeholder="Enter text..."
        style={{
          marginTop: '10px',
        }}
      />
      <Button
        variant="primary"
        onClick={() => inputControl.current?.focus()}
        style={{
          marginTop: '10px',
        }}
      >
        Set Fokus to Input Control
      </Button>
    </>
  )
}
