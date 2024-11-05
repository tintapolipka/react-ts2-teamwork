export interface Todo {
  id: number | string;
  title: string;
  done: boolean;
}

export interface TodoListProps {
  todos: Todo[];
}

export interface TodoItemProps extends Todo {
  handleDelete: (id: number | string) => void;
  handleDone: (isdone:boolean) => void;
}