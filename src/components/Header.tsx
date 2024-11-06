import { useState } from "react";
import { HeaderProps } from "../interfaces/HeaderProps"

const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  function handleAddClick() {
      onAddTodo(title);
      setTitle("");
  };

  return (<div className='todo-header'>
      <h2>ToDo List</h2>
    <div className="todo-body">
      <input
        type="text"
        id="todoText"
        className="todo-input"
        placeholder="Add your items"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button id="AddUpdateClick" onClick={handleAddClick}>+</button>
    </div>
  </div>)
}

export default Header