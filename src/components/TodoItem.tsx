import { TodoItemProps } from "../interfaces/Todo";

const TodoItem: React.FC<TodoItemProps> = ({ title, done, handleDelete, handleDone }: TodoItemProps) => {
  function handleChangeCheckBox() {
    handleDone(!done);
  }

  function handleDeleteTodo() {
    handleDelete()
  }

  const inputId = `id-${title.split(/\s+/).join('-')}`
  return (
    <li>
      <input id={inputId} type="checkbox" onChange={handleChangeCheckBox} checked={done} />
      <label htmlFor={inputId}><h1>{title}</h1></label>
      {done && <p>Done!</p>}
      <button onClick={handleDeleteTodo}>🗑️</button>
    </li>
  )
}

export default TodoItem;