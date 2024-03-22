import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { DeleteIcon } from '../../assets/icons/DeleteIcon'
import { EditIcon } from '../../assets/icons/EditIcon'
import { CalendarIcon } from '../../assets/icons/CalendarIcon'
import { TodoAction } from '../../enums'
import { useTodo } from '../../hooks/useTodos'
import { useNavigate } from 'react-router-dom'
import { TodoHistory } from '../../types'

interface MenuActionsProps {
  id: number
  title: string
  todoHistory: TodoHistory[]
}

export default function MenuActions({
  id,
  title,
  todoHistory,
}: MenuActionsProps) {
  const {
    setTodoIdAndTitle,
    setOpenDeleteDialog,
    setOpenTaskDialog,
    setTodoHistory,
  } = useTodo()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAction = (
    id: number,
    action:
      | TodoAction.TASK_HISTORY
      | TodoAction.EDIT_TASK
      | TodoAction.DELETE_TASK,
  ) => {
    if (action === TodoAction.TASK_HISTORY) {
      setTodoHistory(todoHistory)
      setOpenTaskDialog(true)
    }
    if (action === TodoAction.EDIT_TASK) {
      navigate(`/edit/${id}`, { state: { id } })
    }

    if (action === TodoAction.DELETE_TASK) {
      setTodoIdAndTitle({ id, title })
      setOpenDeleteDialog(true)
    }
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          key={TodoAction.TASK_HISTORY}
          onClick={() => {
            setAnchorEl(null)
            handleAction(id, TodoAction.TASK_HISTORY)
          }}
        >
          <CalendarIcon />
          {TodoAction.TASK_HISTORY}
        </MenuItem>
        <MenuItem
          key={TodoAction.EDIT_TASK}
          onClick={() => {
            setAnchorEl(null)
            handleAction(id, TodoAction.EDIT_TASK)
          }}
        >
          <EditIcon />
          {TodoAction.EDIT_TASK}
        </MenuItem>
        <MenuItem
          key={TodoAction.DELETE_TASK}
          onClick={() => {
            setAnchorEl(null)
            handleAction(id, TodoAction.DELETE_TASK)
          }}
          sx={{
            color: '#D32F2F',
          }}
        >
          <DeleteIcon />
          {TodoAction.DELETE_TASK}
        </MenuItem>
      </Menu>
    </div>
  )
}
