import { createContext, Context, Dispatch, SetStateAction } from 'react'
import { TodoHistory, TodoItemProps } from './types'

interface AppContextType {
  todos: TodoItemProps[]
  setTodos: Dispatch<SetStateAction<TodoItemProps[]>>
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>
  setOpenTaskDialog: Dispatch<SetStateAction<boolean>>
  setTodoIdAndTitle: Dispatch<SetStateAction<Partial<TodoItemProps>>>
  setTodoHistory: Dispatch<SetStateAction<TodoHistory[]>>
  dialogDeleteOpened: boolean
  dialogTaskOpened: boolean
  todoIdAndTitle: Partial<TodoItemProps>
  todoHistory: TodoHistory[]
}

const defaultValues: AppContextType = {
  setTodos: () => {},
  setOpenDeleteDialog: () => {},
  setOpenTaskDialog: () => {},
  setTodoIdAndTitle: () => {},
  setTodoHistory: () => {},
  todos: [],
  dialogTaskOpened: false,
  dialogDeleteOpened: false,
  todoHistory: [],
  todoIdAndTitle: {
    id: 0,
    title: '',
  },
}

export const AppContext: Context<AppContextType> =
  createContext<AppContextType>(defaultValues)
