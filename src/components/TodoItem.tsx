import { TodoItemProps } from "../interfaces/Todo";

const TodoItem: React.FC<TodoItemProps> = ({ id, title, done, handleDelete, handleDone}:TodoItemProps) => {
  function handleChangeCheckBox(){
    handleDone(!done);
  }
   const inputId = `id-${title.split(/\s+/).join('-')}`
  return (
    <li key={inputId}>
        <input id={inputId} type="checkbox" onChange={handleChangeCheckBox} checked={done} />
      <label htmlFor={inputId}><h1>{title}</h1></label>
      {done && <p>Done!</p>}
      <button onClick={() => handleDelete(id)}>🗑️</button>
    </li>
  )
}

export default TodoItem;