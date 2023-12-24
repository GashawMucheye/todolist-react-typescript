// import { createContext, useReducer } from 'react';
// import { Children, StateType, ActionType } from '../types/types';

// // const handleEdit = (e: React.FormEvent, id: number) => {
// //   e.preventDefault();
// //   setTodos(
// //     todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
// //   );
// //   setEdit(false);
// // };

// // const handleDelete = (id: number) => {
// //   setTodos(todos.filter((todo) => todo.id !== id));
// // };

// // const handleDone = (id: number) => {
// //   setTodos(
// //     todos.map((todo) =>
// //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
// //     )
// //   );
// // };

// const INITIAL_STATE = {
//   todos: [],
// };

// export const TaskContext = createContext<{
//   state: StateType;
//   dispatch: React.Dispatch<ActionType>;
// }>({
//   state: INITIAL_STATE,
//   dispatch: () => {},
// });

// const reducer = (state: StateType, action: ActionType) => {
//   switch (action.type) {
//     case 'ADDING_TASK':
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     case 'DELETE_TASK':
//       // setTodos(todos.filter((todo) => todo.id !== id));

//       return {
//         ...state,
//         todos: [...state.todos.filter((task) => task.id !== action.payload.id)],
//       };

//     case 'DONE_TASK':
//       // todos.map((todo) =>
//       // //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
//       return {
//         ...state,
//         todos: [
//           ...state.todos.map((task) =>
//             task.id === action.payload.id
//               ? { ...task, isDone: !task.isDone }
//               : task
//           ),
//         ],
//       };

//     case 'EDIT_TASK':
//       //     todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
//       //   );
//       //   setEdit(false);
//       return {
//         ...state,
//         todos: [
//           ...state.todos.map((task) =>
//             task.id === action.payload.id
//               ? { ...task, todo: action.payload }
//               : task
//           ),
//         ],
//       };

//     default:
//       return state;
//   }
// };

// export const TaskProvider = ({ children }: Children) => {
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

//   return (
//     <TaskContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };
