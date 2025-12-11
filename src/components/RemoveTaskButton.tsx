type Props = {
  onDelete: () => void
};

export const RemoveTaskButton = ({onDelete}: Props) => {
  return <button onClick={() => onDelete()}>X</button>
}
