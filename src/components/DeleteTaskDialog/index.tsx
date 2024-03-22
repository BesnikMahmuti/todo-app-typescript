import {
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from '@mui/material'
import { useTodo } from '../../hooks/useTodos'
import { DeleteLargeIcon } from '../../assets/icons/DeleteLargeIcon'

export function DeleteTaskDialog() {
  const {
    dialogDeleteOpened,
    setOpenDeleteDialog,
    deleteTodo,
    todoIdAndTitle,
  } = useTodo()

  const handleClose = () => setOpenDeleteDialog(false)

  return (
    <Dialog
      open={dialogDeleteOpened}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className="custom-flex-justify-center">
        <DialogContentText id="alert-dialog-description">
          <DeleteLargeIcon />
          <Typography
            variant="h4"
            sx={{
              marginTop: '40px',
              marginBottom: '8px',
            }}
          >
            Delete Task ?
          </Typography>
          <Typography variant="body2">{`You have made changes, are you sure about deleting`}</Typography>
          <Typography variant="body2">"{todoIdAndTitle.title}?"</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          color="secondary"
          sx={{
            width: '170px',
            ':hover': {
              background: '#fff',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            if (todoIdAndTitle.id) deleteTodo(todoIdAndTitle.id)
            setOpenDeleteDialog(false)
          }}
          sx={{
            width: '170px',
            // backgroundColor: 'error.dark',
          }}
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
