import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { generateRandomId } from '../../utils'
import { ToDostatus } from '../../enums'
import { useTodo } from '../../hooks/useTodos'
import { FileIcon } from '../../assets/icons/FileIcon'

export function TaskForm() {
  const theme = useTheme()
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState('')

  const { addTodo } = useTodo()

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setTitle('')
    setDescription('')

    addTodo({
      id: generateRandomId(),
      title,
      description,
      created_date: new Date().toISOString(),
      status: ToDostatus.TODO,
      history: [
        {
          todoId: generateRandomId(),
          status: ToDostatus.TODO,
          update_date: new Date().toISOString(),
        },
      ],
    })
  }

  // Ideally this goes to a scss file
  const paperStyle = {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[1],
    maxWidth: '648px',
    height: '402px',
  }

  // Ideally this goes to a scss file
  const addButtonStyle = {
    padding: '10px, 20px, 10px, 20px',
    borderRadius: '32px',
  }

  return (
    <Container maxWidth="sm" style={paperStyle}>
      <Grid
        container
        spacing={1}
        alignItems="center"
        sx={{
          marginBottom: '24px',
        }}
      >
        <Grid item>
          <FileIcon />
        </Grid>
        <Grid item>
          <Typography variant="h1" gutterBottom>
            Add a new Task
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="Title"
              fullWidth
              value={title}
              onChange={handleTitleChange}
              id="title"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="Description"
              multiline
              rows={7}
              fullWidth
              value={description}
              onChange={handleDescriptionChange}
              id="description"
            />
          </Grid>

          <Grid item xs={12} container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="medium"
              style={addButtonStyle}
              startIcon={<AddIcon />}
              disabled={!title || !description}
              data-testid="add"
            >
              <Typography color="primary.contrastText">Add</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
