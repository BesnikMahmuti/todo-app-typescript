import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import { AppContext } from './AppContext'
import { useState } from 'react'
import { TodoHistory, TodoItemProps } from './types'
import { EditTask } from './routes/EditTask'
export default function App() {
  const [currentTodos, setTodos] = useState<TodoItemProps[]>(
    JSON.parse(localStorage.getItem('todos') || '[]') || [],
  )
  const [dialogDeleteOpened, setOpenDeleteDialog] = useState<boolean>(false)
  const [dialogTaskOpened, setOpenTaskDialog] = useState<boolean>(false)
  const [todoIdAndTitle, setTodoIdAndTitle] = useState<Partial<TodoItemProps>>({
    id: 0,
    title: '',
  })
  const [todoHistory, setTodoHistory] = useState<TodoHistory[]>([])
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          todos: currentTodos,
          todoHistory,
          todoIdAndTitle,
          dialogDeleteOpened,
          dialogTaskOpened,
          setTodos,
          setOpenDeleteDialog,
          setOpenTaskDialog,
          setTodoIdAndTitle,
          setTodoHistory,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  )
}
