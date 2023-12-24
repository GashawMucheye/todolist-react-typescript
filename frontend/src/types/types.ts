type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
};

// type EditTask = {
//   type: 'EDIT_TASK';
//   payload: boolean;
// };

type StateType = {
  todos: Todo[];
};

type ActionType = {
  type: 'ADDING_TASK' | 'DELETE_TASK' | 'DONE_TASK' | 'EDIT_TASK';
  payload: Todo | number;
};

type Children = { children: React.ReactNode };

export type { Todo, Children, StateType, ActionType };
