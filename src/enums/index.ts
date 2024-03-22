enum ToDostatus {
  TODO = 'ToDo',
  BLOCKED = 'Blocked',
  IN_PROGRESS = 'InProgress',
  IN_QA = 'InQa',
  DONE = 'Done',
  DEPLOYED = 'Deployed',
}

enum TodoAction {
  TASK_HISTORY = 'Task History',
  EDIT_TASK = 'Edit Task',
  DELETE_TASK = 'Delete Task',
}

export { ToDostatus, TodoAction }
