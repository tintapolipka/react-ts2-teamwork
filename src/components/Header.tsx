import { HeaderProps } from "../interfaces/HeaderProps"

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (<div className='todo-header'>
      <h2>ToDo List</h2>
    <div className="todo-body">
      <input
        type="text"
        id="todoText"
        className="todo-input"
        placeholder="Add your items"
      />
      <button id="AddUpdateClick" onClick={onClick}>+</button>
    </div>
  </div>)
}

export default Header