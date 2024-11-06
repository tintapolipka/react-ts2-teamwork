import { Todo } from "../interfaces/Todo";

export const TodoService = {
  getTodos(): Todo[] {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON) {
      return JSON.parse(todosJSON);
    }
    return [];
  },

  setTodos(todos: Todo[]) {
    const todosJSON = JSON.stringify(todos);

    localStorage.setItem('todos', todosJSON);
  },

  addTodo(title: string): Todo {
    const todos = this.getTodos();
    const newTodo: Todo = { id: todos.length + 1, title, done: false };
    todos.push(newTodo);
    this.setTodos(todos);
    return newTodo;
  }
};
