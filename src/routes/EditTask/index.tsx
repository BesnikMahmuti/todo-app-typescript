import { Container, Grid } from '@mui/material'
import { BreadCrumbsNavigation } from '../../components/BreadCrumbsNavigation'

import { EditTaskForm } from '../../components/EditTaskForm'
import { ToDostatus } from '../../enums'
import { useLocation } from 'react-router-dom'
import { useTodo } from '../../hooks/useTodos'
import { TodoItemProps } from '../../types'

export function EditTask() {
  const location = useLocation()
  const todoId = location?.state?.id || Number(location.pathname.split('/')[2])

  const { todos } = useTodo()

  const currentTodoItem = todos.find(
    (todo: TodoItemProps) => todo.id === todoId,
  )

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Container maxWidth="md">
          <BreadCrumbsNavigation />
          {currentTodoItem ? (
            <EditTaskForm
              key={currentTodoItem.id}
              id={currentTodoItem.id}
              description={currentTodoItem.description}
              status={currentTodoItem?.status as ToDostatus}
              title={currentTodoItem.title}
              history={currentTodoItem.history}
            />
          ) : (
            <div>NO Item found</div>
          )}
        </Container>
      </Grid>
    </Grid>
  )
}
