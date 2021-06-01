import React from 'react'
import { TaskType } from '../../pages/TasksPage/types'

interface TaskCardProps {
  task: TaskType
  isActive: boolean
  onSelectTask: (task: TaskType) => void
}

const TaskCard = ({ task, isActive, onSelectTask }: TaskCardProps) => {
  return (
    <div
      className={'TasksPage__item ' + (isActive ? 'TasksPage__item_active' : '')}
      onClick={() => onSelectTask(task)}>
      <div className='TasksPage__itemStatus'>
        <svg
          width='12'
          height='9'
          viewBox='0 0 12 9'
          fill='#B8B8B8'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M11.5612 0.440289C10.9761 -0.144759 10.025 -0.147759 9.43693 0.437289L4.49831 5.3787L2.56007 3.44054C1.975 2.85549 1.02388 2.85549 0.438805 3.44054C-0.146268 4.02559 -0.146268 4.97667 0.438805 5.56171L3.43918 8.56196C3.73022 8.85299 4.11426 9 4.49831 9C4.88236 9 5.26641 8.85299 5.56044 8.56196L11.5612 2.56147C12.1463 1.97642 12.1463 1.02534 11.5612 0.440289Z' />
        </svg>
      </div>
      <div className='TasksPage__itemContent'>
        <span className='TasksPage__itemTitle'>{task.title}</span>
        <div className='TasksPage__itemTag'>{task.tag}</div>
      </div>
    </div>
  )
}
export { TaskCard }
