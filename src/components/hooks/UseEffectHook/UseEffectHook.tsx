import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { User } from '../../../models/User'
import { Todo } from '../../../models/Todo'
import { Post } from '../../../models/Post'
import { List as UsersTab } from './Users/List'
import { List as TodosTab } from './Todos/List'
import { List as PostsTab } from './Posts/List'
import { Clock } from './Clock'

export const UseEffectHook = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [entityName, setEntityName] = useState<string>('users')
  const [users, setUsers] = useState<User[]>([])
  const [todos, setTodos] = useState<Todo[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    setUsers([])
    setTodos([])
    setPosts([])

    fetch(`https://jsonplaceholder.typicode.com/${entityName}`)
      .then(response => response.json())
      .then(json => {
        switch (entityName) {
          case 'users': {
            setUsers(json)
            break
          }
          case 'todos': {
            setTodos(json)
            break
          }
          case 'posts': {
            setPosts(json)
            break
          }
        }
      })

    return () => console.log('Use Effect: Clean fetching entity...')
  }, [entityName])

  return (
    <>
      <Clock/>
      <hr/>
      <Button variant="primary" onClick={() => setEntityName('users')}>
        Users
      </Button>
      <Button
        variant="secondary"
        className="m-4"
        onClick={() => setEntityName('todos')}
      >
        Todos
      </Button>
      <Button variant="success" onClick={() => setEntityName('posts')}>
        Posts
      </Button>
      <hr
        style={{
          width: '100%',
          color: '#0000dd',
        }}
      />
      {entityName == 'users' && <UsersTab title="Users:" entitySet={users} />}
      {entityName == 'todos' && <TodosTab title="Todos:" entitySet={todos} />}
      {entityName == 'posts' && <PostsTab title="Posts:" entitySet={posts} />}
    </>
  )
}
