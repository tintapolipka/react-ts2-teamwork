import TodoItem from "./TodoItem";
import { TodoListProps, TodoItemProps } from "../interfaces/Todo";
import { useState, useEffect } from "react";
import { TodoService } from "../service/TodoService";
import Header from "./Header";


const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    const [todoList, setTodoList] = useState([...todos]);

    useEffect(() => {
      TodoService.setTodos(todoList);
    }, [todoList]);

    function handleTodoChanged(index: number): TodoItemProps['handleDone'] {
        return (isdone: boolean) => {
            console.log(`At ${index} done is changed to ${isdone}!`);
            const updatedTodo = todoList[index];
            updatedTodo.done = isdone;
            const copiedTodoList = [...todoList]
            copiedTodoList.splice(index, 1, updatedTodo);
            setTodoList(copiedTodoList);
        }
    }

    function handleDeleteTodo(index: number) {
        return () => {
            const copiedTodoList = [...todoList];
            copiedTodoList.splice(index, 1);
            setTodoList(copiedTodoList);
        }
    }

    function addTodo(title: string) {
        const newTodo = TodoService.addTodo(title);
        setTodoList((prevTodos) => [...prevTodos, newTodo]);
    };

    const todoLiList = todoList.map((todo, index) => <TodoItem handleDelete={handleDeleteTodo(index)} handleDone={handleTodoChanged(index)} id={todo.id} title={todo.title} done={todo.done} key={`id-${todo.title.split(/\s+/).join('-')}`} />)

    return (
        <div>
            <Header onAddTodo={addTodo}/>
            <ul>{todoLiList}</ul>
        </div>
    )
}

export default TodoList;
