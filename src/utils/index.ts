import { format, parseISO } from 'date-fns'
import { ToDostatus } from '../enums'
import { TodoStatus } from '../types'

function generateRandomId(): number {
  return Math.floor(Math.random() * 1000000)
}

function formatDate(date: string): string {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, "MMM d, yyyy '-' HH:mm")
  return formattedDate
}

function availableStatuses(status: TodoStatus): ToDostatus[] {
  switch (status) {
    case ToDostatus.TODO:
      return [ToDostatus.IN_PROGRESS]
    case ToDostatus.IN_PROGRESS:
      return [ToDostatus.BLOCKED, ToDostatus.IN_QA]
    case ToDostatus.BLOCKED:
      return [ToDostatus.TODO]
    case ToDostatus.IN_QA:
      return [ToDostatus.TODO, ToDostatus.DONE]
    case ToDostatus.DONE:
      return [ToDostatus.DEPLOYED]
    default:
      return []
  }
}

function formatStatus(status: TodoStatus): string {
  switch (status) {
    case ToDostatus.TODO:
      return 'To Do'
    case ToDostatus.IN_PROGRESS:
      return 'In Progress'
    case ToDostatus.BLOCKED:
      return 'Blocked'
    case ToDostatus.IN_QA:
      return 'In Qa'
    case ToDostatus.DONE:
      return 'Done'
    case ToDostatus.DEPLOYED:
      return 'Deployed'
    default:
      return ''
  }
}

export { generateRandomId, availableStatuses, formatDate, formatStatus }
