import { Todo } from "../interfaces/Todo";

const TodoItem: React.FC<Todo> = ({ title, done }) => {
  
  const inputId = `id-${title.split(/\s+/).join('-')}`
  
  return (
    <li key={inputId}>
        {done ?
          (<input id={inputId} type="checkbox" checked />) : (<input id={inputId} type="checkbox" />)
        }
      <label htmlFor={inputId}><h1>{title}</h1></label>
      <button>🗑️</button>
    </li>
  )
}

export default TodoItem