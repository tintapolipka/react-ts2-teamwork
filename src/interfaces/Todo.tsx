export interface Todo {
  title: string;
  done: boolean;
}

export interface TodoListProps {
  todos: Todo[];
}