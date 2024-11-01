import { TodoItemProps } from "../interfaces/Todo";

const TodoItem: React.FC<TodoItemProps> = ({ title, done, handleDone}:TodoItemProps) => {
  function handleChangeCheckBox(){
    handleDone(!done);
  }
   const inputId = `id-${title.split(/\s+/).join('-')}`
  return (
    <li key={inputId}>
        <input id={inputId} type="checkbox" onChange={handleChangeCheckBox} checked={done} />
      <label htmlFor={inputId}><h1>{title}</h1></label>
      {done && <p>Done!</p>}
      <button>🗑️</button>
    </li>
  )
}

export default TodoItem;