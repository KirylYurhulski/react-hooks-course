import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useTodo } from '../Context/TodoProvider'

export const Create = () => {
  const [value, setValue] = useState<string>('')
  const todo = useTodo()

  return (
    <Form>
      <Row className="align-items-center">
        <Col xs={7}>
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Input Todo"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button
            variant="success"
            className="m-4"
            onClick={() => {
              if (value) {
                todo.addNewTodo(value)
                setValue('')
              }
            }}
          >
            Add Todo
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
