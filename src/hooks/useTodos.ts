import { useContext } from 'react'
import { TodoItemProps } from '../types'
import { AppContext } from '../AppContext'

export const useTodo = () => {
  const {
    todos,
    dialogDeleteOpened,
    dialogTaskOpened,
    todoIdAndTitle,
    todoHistory,
    setTodos,
    setOpenDeleteDialog,
    setOpenTaskDialog,
    setTodoIdAndTitle,
    setTodoHistory,
  } = useContext(AppContext)

  const addTodo = ({
    id,
    title,
    description,
    history,
    status,
  }: TodoItemProps) => {
    const newTodo: TodoItemProps = {
      id,
      title,
      description,
      created_date: new Date().toISOString(),
      history,
      status,
    }

    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: number, updatedTodo: Partial<TodoItemProps>) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo,
    )
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  return {
    todos,
    dialogDeleteOpened,
    dialogTaskOpened,
    todoIdAndTitle,
    todoHistory,
    setTodoHistory,
    addTodo,
    deleteTodo,
    editTodo,
    setOpenDeleteDialog,
    setOpenTaskDialog,
    setTodoIdAndTitle,
  }
}
