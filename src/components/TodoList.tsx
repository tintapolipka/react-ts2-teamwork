import TodoItem from "./TodoItem";
import { TodoListProps,TodoItemProps } from "../interfaces/Todo";
import { useState } from "react";

const TodoList : React.FC<TodoListProps>=({todos})=>{
    const [todoList,setTodoList] = useState([...todos])
    
    function handleTodoChanged(index:number):TodoItemProps['handleDone']{
        return  (isdone : boolean) =>{
            console.log(`At ${index} done is changed to ${isdone}!`);
            const updatedTodo = todoList[index];
                updatedTodo.done = isdone;
            const copiedTodoList = [...todoList]
            copiedTodoList.splice(index,1,updatedTodo);
            setTodoList(copiedTodoList);
        }
    }

    function handleDelete(id: string | number) {
        setTodoList(todos.filter(todo => todo.id !== id));
    }

    const todoLiList = todoList.map((todo,index)=><TodoItem handleDelete={handleDelete} handleDone={handleTodoChanged(index)} id={todo.id} title={todo.title} done={todo.done} key={index}/>)

    return (<ul>{todoLiList}</ul>)
}

export default TodoList;