import { RemoveTaskButton } from './RemoveTaskButton';

type Task = {
  completed: boolean,
  id: number,
  text: string,
  onToggleCompleted: (id: number) => React.ChangeEventHandler<HTMLInputElement>,
  onDelete: (id: number) => void
}

export const Task = ({
  completed,
  id,
  text,
  onToggleCompleted,
  onDelete}: Task) => {

  return (
    <div className={`todoItem ${completed ? 'completed' : ''}`}>
      <input type="checkbox" defaultChecked={completed} onChange={onToggleCompleted(id)} />
      <span className="text">{text}</span>
      <RemoveTaskButton onDelete={() => onDelete(id)} />
    </div>
  )
}
