interface Props {
  id: string;
  onItemClick?: (params: string) => void;
}

const DeleteButton = ({ id, onItemClick }: Props) => {
  return <button onClick={() => onItemClick && onItemClick(id)}>Delete</button>;
};

export default DeleteButton;
