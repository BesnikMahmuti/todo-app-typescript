import { Box, Chip, Container, Grid, Typography, useTheme } from '@mui/material'
import { TodoItemProps, TodoStatus } from '../../types'
import MenuActions from '../MenuActions'
import { formatDate, formatStatus } from '../../utils'
import { ClockIcon } from '../../assets/icons/ClockIcon'

interface Props {
  index: number
  todoItem: TodoItemProps
}

export function TaskItem({ index, todoItem }: Props) {
  const theme = useTheme()
  const paperStyle = {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    marginBottom: theme.spacing(2),
    minHeight: '102px',
    maxWidth: '648px',
  }
  return (
    <Container maxWidth="sm" style={paperStyle}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        <Grid
          item
          sx={{
            paddingLeft: '24px',
          }}
        >
          <Typography variant="h3">{todoItem.title}</Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignContent={'center'}
          >
            <Typography variant="h5" color="grey.500" alignItems={'center'}>
              <ClockIcon /> {formatDate(todoItem.created_date)}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            direction="row"
          >
            <Chip
              label={formatStatus(todoItem.status as TodoStatus)}
              color={index % 2 === 0 ? 'primary' : 'secondary'}
              variant="outlined"
            />
            <Typography variant="h5">
              <MenuActions
                id={todoItem.id}
                title={todoItem.title}
                todoHistory={todoItem.history}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          paddingLeft: '10px',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            marginTop: '8px',
          }}
        >
          {todoItem.description}
        </Typography>
      </Grid>
    </Container>
  )
}
