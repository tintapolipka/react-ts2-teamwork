export interface Todo {
  id: number | string;
  title: string;
  done: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  addTodo: (title: string) => void;
}

export interface TodoItemProps extends Todo {
  handleDelete: () => void;
  handleDone: (isdone:boolean) => void;
}