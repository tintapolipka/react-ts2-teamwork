import { useState } from "react";
import { Todo } from "../interfaces/Todo";

const TodoItem: React.FC<Todo> = ({ title, done }) => {
  const [isDone,setIsDone] = useState(done);
  
  function handleChangeCheckBox(){
    setIsDone(!isDone);
  }

  return (
    <div>
      <h1>{title}</h1>
      <label>
        {isDone ?
          (<input onChange={handleChangeCheckBox} type="checkbox" defaultChecked />) : (<input onChange={handleChangeCheckBox} type="checkbox" />)
        }
      </label>
      {isDone && <p>Done!</p>}
      <button>Delete</button>
    </div>
  )
}

export default TodoItem