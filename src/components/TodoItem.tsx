import { TodoItemProps } from "../interfaces/Todo"

const TodoItem: React.FC<TodoItemProps> = ({ title, done, handleDone}:TodoItemProps) => {
  function handleChangeCheckBox(){
    handleDone(!done);
  }

  return (
    <div>
      <h1>{title}</h1>
      <label>
        {done ?
          (<input onChange={handleChangeCheckBox} type="checkbox" defaultChecked />) : (<input onChange={handleChangeCheckBox} type="checkbox" />)
        }
      </label>
      {done && <p>Done!</p>}
      <button>Delete</button>
    </div>
  )
}

export default TodoItem