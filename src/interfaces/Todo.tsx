export interface Todo {
  title: string;
  done: boolean;
}

export interface TodoListProps {
  todos: Todo[];
}

export interface TodoItemProps extends Todo {
  
  handleDone: (isdone:boolean)=>void;
}