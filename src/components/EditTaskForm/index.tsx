import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { availableStatuses } from '../../utils'
import { useTodo } from '../../hooks/useTodos'
import { ToDostatus } from '../../enums'
import { TodoHistory } from '../../types'
import { useNavigate } from 'react-router-dom'
import { FileIcon } from '../../assets/icons/FileIcon'
import { CheckoutIcon } from '../../assets/icons/Checkout'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface Props {
  id: number
  title: string
  description: string
  status: ToDostatus
  history: TodoHistory[]
}

export function EditTaskForm({
  id,
  title,
  description,
  status,
  history = [],
}: Props) {
  const theme = useTheme()
  const navigate = useNavigate()
  const [currentTitle, setCurrentTitle] = useState<string>(title)
  const [currentDescription, setCurrentDescription] =
    useState<string>(description)
  const [currentStatus, setCurrentStatus] = useState<string>(status)

  const { editTodo } = useTodo()

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTitle(event.target.value)
  }

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCurrentDescription(event.target.value)
  }

  const handleChangeOfStatus = (event: SelectChangeEvent) => {
    setCurrentStatus(event.target.value)
  }

  const handleSubmit = () => {
    const editItem = {
      title: currentTitle,
      description: currentDescription,
      status: currentStatus,
      history: [
        ...history,
        {
          todoId: id,
          status: currentStatus as ToDostatus,
          update_date: new Date().toISOString(),
        },
      ],
    }
    editTodo(id, editItem)
  }

  // Ideally this goes to a scss file
  const paperStyle = {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    maxWidth: '648px',
  }

  return (
    <Container maxWidth="sm" style={paperStyle}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <FileIcon />
        </Grid>
        <Grid item>
          <Typography variant="h1" gutterBottom>
            Edit Task
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            placeholder="Title"
            variant="outlined"
            fullWidth
            value={currentTitle}
            onChange={handleTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Description"
            variant="outlined"
            multiline
            rows={7}
            fullWidth
            value={currentDescription}
            onChange={handleDescriptionChange}
          />
        </Grid>

        <Grid item xs={12} container justifyContent="flex-end">
          <Select
            id="status"
            value={currentStatus}
            onChange={handleChangeOfStatus}
            style={{
              minWidth: '100%',
            }}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value={status}>{status}</MenuItem>
            {availableStatuses(status).map((availableStatus: ToDostatus) => (
              <MenuItem key={availableStatus} value={availableStatus}>
                {availableStatus}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          sx={{
            width: '100%',
            gap: 1,
            padding: theme.spacing(2),
            paddingTop: '32px',
            flexWrap: 'nowrap',
          }}
        >
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<CheckoutIcon />}
              disabled={!currentTitle || !currentDescription}
              onClick={handleSubmit}
              sx={{ width: '100%' }}
            >
              Save Changes
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() => navigate('/')}
              sx={{
                width: '100%',
                ':hover': {
                  backgroundColor: '#fff',
                },
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
