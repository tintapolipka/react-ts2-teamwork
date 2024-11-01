import { useState } from "react";
import { Todo } from "../interfaces/Todo";

const TodoItem: React.FC<Todo> = ({ title, done }) => {

  const inputId = `id-${title.split(/\s+/).join('-')}`

  const [doneTodo, setDoneTodo] = useState<boolean>(done);

  return (
    <li key={inputId}>
      <input type="checkbox" checked={doneTodo} onChange={e => setDoneTodo(e.target.checked)} />
      <label htmlFor={inputId}><h1>{title}</h1></label>
      <button>🗑️</button>
    </li>
  )
}

export default TodoItem