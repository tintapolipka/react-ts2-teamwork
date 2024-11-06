import TodoItem from "./TodoItem";
import { TodoItemProps } from "../interfaces/Todo";
import { useEffect, useState } from "react";
import setTodos from "../helpers/setTodo";
import getTodos from "../helpers/getTodo";

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState(getTodos());

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  function handleTodoChanged(index: number): TodoItemProps["handleDone"] {
    return (isdone: boolean) => {
      console.log(`At ${index} done is changed to ${isdone}!`);
      const updatedTodo = todoList[index];
      updatedTodo.done = isdone;
      const copiedTodoList = [...todoList];
      copiedTodoList.splice(index, 1, updatedTodo);
      setTodoList(copiedTodoList);
    };
  }

  function handleDeleteTodo(index: number) {
    return () => {
      const copiedTodoList = [...todoList];
      copiedTodoList.splice(index, 1);
      setTodoList(copiedTodoList);
    };
  }

  function handleAddTodo() {
    const listWithAddedTodo = [...todoList,{id:Math.random(),title:"Implement addTodo",done:false}];
    setTodoList(listWithAddedTodo);
  }

  const todoListItems = todoList.map((todo, index) => (
    <TodoItem
      handleDelete={handleDeleteTodo(index)}
      handleDone={handleTodoChanged(index)}
      id={todo.id}
      title={todo.title}
      done={todo.done}
      key={`id-${todo.title.split(/\s+/).join("-")+todo.id}`}
    />
  ));

  return <><button onClick={handleAddTodo}></button><ul>{todoListItems}</ul></>;
};

export default TodoList;
