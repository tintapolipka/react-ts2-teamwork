import TodoItem from "./TodoItem";
import { TodoListProps,TodoItemProps } from "../interfaces/Todo";

const TodoList : React.FC<TodoListProps>=({todos})=>{
    const todoList = [...todos];
    console.log(todoList);
    function handleTodoChanged(index:number):TodoItemProps['handleDone']{
        return function (isdone : boolean){
            console.log(`At ${index} done is changed to ${isdone}!`)
        }
    }
    // EL kell dönteni, hogy hol legyen state. Minden TodoItemnek legyen saját,
    // vagy a TodoList tartalmazza, és újra renderelje a TodoItemeket is, 
    // ha változnak?

    const todoLiList = todoList.map((todo,index)=><TodoItem handleDone={handleTodoChanged(index)} title={todo.title} done={todo.done} key={index}/>)

    return (<ul>{todoLiList}</ul>)
}

export default TodoList;