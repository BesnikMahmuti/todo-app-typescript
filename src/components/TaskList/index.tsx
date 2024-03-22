import { Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { EmptyResultIcon } from '../../assets/icons/EmptyResultIcon'
import { TodoItemProps } from '../../types'
import { TaskItem } from '../TaskItem'
import { Fragment } from 'react'

function NoTodosFound() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <EmptyResultIcon />
        </Grid>
        <Grid item>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography gutterBottom>You have nothing to do.</Typography>
            <Typography>Go get some sleep!</Typography>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}></Grid>
    </Container>
  )
}

interface Props {
  todos: TodoItemProps[]
}

export function TaskList({ todos = [] }: Props) {
  const theme = useTheme()
  const paperStyle = {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    height: '218px',
    maxWidth: '648px',
  }
  return (
    <Fragment>
      {!todos.length && (
        <Container maxWidth="sm" style={paperStyle}>
          <NoTodosFound />
        </Container>
      )}

      {todos.map((todo: TodoItemProps, index: number) => (
        <TaskItem key={todo.id} todoItem={todo} index={index} />
      ))}
    </Fragment>
  )
}
