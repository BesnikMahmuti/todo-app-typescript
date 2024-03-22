import { fireEvent, render, screen, renderHook } from '@testing-library/react'
import App from './App'
import { useTodo } from './hooks/useTodos'
import { act } from 'react-dom/test-utils'
import { TodoItemProps } from './types'
import { ToDostatus } from './enums'

it('Test add a new todo render and functionality ', () => {
  const { result } = renderHook(() => useTodo())
  const currentResult = result.current
  render(<App />)
  const title = screen.queryByText(/Add a new task/i)
  const breadcrumb = screen.queryByText(/Task Management/i)
  const tasksTitle = screen.queryByText(/Tasks/i)
  const noTasksFound = screen.queryByText(/You have nothing to do/i)
  const inputTitleElement = screen.getByPlaceholderText('Title')
  const inputDescriptionElement = screen.getByPlaceholderText('Description')
  const saveButton = screen.getByTestId('add')

  const currentDate = new Date().toISOString()
  const newTodoItem: TodoItemProps = {
    id: 1,
    title: 'New todo from test',
    description: 'New todo descrition from test',
    created_date: currentDate,
    history: [
      {
        todoId: 1,
        status: ToDostatus.TODO,
        update_date: currentDate,
      },
    ],
    status: ToDostatus.TODO,
  }

  expect(title).toBeVisible()
  expect(breadcrumb).toBeVisible()
  expect(tasksTitle).toBeVisible()
  expect(noTasksFound).toBeVisible()
  expect(inputTitleElement).toBeInTheDocument()
  expect(inputDescriptionElement).toBeInTheDocument()

  expect(currentResult.todos).toStrictEqual([])

  fireEvent.change(inputTitleElement, {
    target: { value: newTodoItem.title },
  })
  fireEvent.change(inputTitleElement, {
    target: { value: newTodoItem.description },
  })

  fireEvent.click(saveButton)

  act(() => {
    result.current.addTodo(newTodoItem)
  })
})
