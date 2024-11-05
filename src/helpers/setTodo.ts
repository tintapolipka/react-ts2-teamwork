import { Todo } from "../interfaces/Todo";

export default function setTodos(todos: Todo[]) {
    const todosJSON = JSON.stringify(todos);

    localStorage.setItem('todos', todosJSON);
}