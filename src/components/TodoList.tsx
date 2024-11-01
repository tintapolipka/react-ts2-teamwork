import TodoItem from "./TodoItem";
import { TodoListProps } from "../interfaces/Todo";

const TodoList : React.FC<TodoListProps>=({todos})=>{
    const todoList = todos.map((todo,index)=><TodoItem title={todo.title} done={todo.done} key={index}/>)

    return (<ul>{todoList}</ul>)
}

export default TodoList;