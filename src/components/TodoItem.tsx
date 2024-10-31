import { Todo } from "../interfaces/Todo";

const TodoItem: React.FC<Todo> = ({ title, done }) => {
  return (
    <div>
      <h1>{title}</h1>
      <label>
        {done ?
          (<input type="checkbox" checked />) : (<input type="checkbox" />)
        }
      </label>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem