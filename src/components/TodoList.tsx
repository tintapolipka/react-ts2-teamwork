import TodoItem from "./TodoItem";
import { TodoListProps,TodoItemProps } from "../interfaces/Todo";

const TodoList : React.FC<TodoListProps>=({todos})=>{
    const todoList = [...todos];
 
    function handleTodoChanged(index:number):TodoItemProps['handleDone']{
        return  (isdone : boolean) =>{
            console.log(`At ${index} done is changed to ${isdone}!`);
            const updatedTodo = todoList[index];
                updatedTodo.done = isdone;
            todoList.splice(index,1,updatedTodo);
            console.log(todoList);
        }
    }

    const todoLiList = todoList.map((todo,index)=><TodoItem handleDone={handleTodoChanged(index)} title={todo.title} done={todo.done} key={index}/>)

    return (<ul>{todoLiList}</ul>)
}

export default TodoList;