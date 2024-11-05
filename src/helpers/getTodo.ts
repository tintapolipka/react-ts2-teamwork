import { Todo } from "../interfaces/Todo";

export default function getTodos(): Todo[] {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON) {
        return JSON.parse(todosJSON);
    }
    return [];
}