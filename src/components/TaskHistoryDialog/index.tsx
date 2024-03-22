import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { useTodo } from '../../hooks/useTodos'
import { ClockIcon } from '../../assets/icons/ClockIcon'
import { formatDate } from '../../utils'
import { Fragment } from 'react'

export function HistoryTaskDialog() {
  const { dialogTaskOpened, setOpenTaskDialog, todoHistory } = useTodo()
  const handleClose = () => setOpenTaskDialog(false)

  return (
    <Dialog
      open={dialogTaskOpened}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      sx={{
        '&.MuiDialog-container': {
          alignItems: 'flex-start',
        },
      }}
    >
      <DialogContent
        sx={{
          '&.MuiDialogContent-root': {
            alignItems: 'start',
            justifyContent: 'start',
            gap: '0 ',
            padding: '32px',
            height: '600px',
          },
        }}
      >
        <DialogTitle
          sx={{
            padding: 0,
          }}
        >
          <Typography variant="h4">Task History</Typography>
        </DialogTitle>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
        <Grid container>
          <Grid item xs={12}>
            <List
              dense={false}
              sx={{
                width: '100%',
              }}
            >
              {todoHistory.map(tHistory => (
                <Fragment key={tHistory.status}>
                  <ListItem
                    key={tHistory.status}
                    disablePadding
                    sx={{
                      paddingBottom: '16px',
                      paddingTop: '24px',
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="h3">
                          The task was marked as "{tHistory.status}"
                        </Typography>
                      }
                      secondary={
                        <SecondRow updateDate={tHistory.update_date} />
                      }
                    />
                  </ListItem>
                  <Divider />
                </Fragment>
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

interface SecondRowProps {
  updateDate: string
}
const SecondRow = ({ updateDate }: SecondRowProps) => {
  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <ClockIcon />
      <Typography variant="h5"> {formatDate(updateDate)}</Typography>
    </span>
  )
}
