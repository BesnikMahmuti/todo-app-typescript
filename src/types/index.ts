import { ToDostatus } from '../enums'

type TodoStatus =
  | ToDostatus.TODO
  | ToDostatus.IN_PROGRESS
  | ToDostatus.BLOCKED
  | ToDostatus.DONE
  | ToDostatus.IN_QA
  | ToDostatus.DEPLOYED

type TodoHistory = {
  todoId: number
  status: TodoStatus
  update_date: string
}

type TodoItemProps = {
  id: number
  title: string
  description: string
  created_date: string
  status: string
  history: TodoHistory[]
}

type FormMode = 'ADD' | 'EDIT'

export type { TodoItemProps, TodoHistory, TodoStatus, FormMode }
