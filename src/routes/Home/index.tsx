import { Container, Grid, Typography } from '@mui/material'
import { TaskForm } from '../../components/TaskForm'
import { BreadCrumbsNavigation } from '../../components/BreadCrumbsNavigation'
import { TaskList } from '../../components/TaskList'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { DeleteTaskDialog } from '../../components/DeleteTaskDialog'
import { HistoryTaskDialog } from '../../components/TaskHistoryDialog'

export function Home() {
  const { todos } = useContext(AppContext)
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Container maxWidth="md">
          <BreadCrumbsNavigation />
          <TaskForm />
          <Typography
            sx={{
              marginTop: '40px',
              marginBottom: '14px',
            }}
            variant="h4"
          >
            Tasks
          </Typography>
          <TaskList todos={todos} />
          <DeleteTaskDialog />
          <HistoryTaskDialog />
        </Container>
      </Grid>
    </Grid>
  )
}
