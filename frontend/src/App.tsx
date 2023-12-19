import { useState } from 'react';
import { Alltasks } from './types/types';
import SingleTodo from './components/SingleTodo';
import InputFields from './components/InputFields';

// interface State {
//   filter(arg0: (todo: any) => boolean): unknown;

//   id: number;
//   todo: string;
//   isDone: boolean;
// }

// interface Action {
//   type: string;
//   payload?: any;
// }

// export const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         { id: Date.now(), todo: action.payload, isDone: false },
//       ];
//     case 'EDIT':
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     case 'DONE':
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [allTasks, setAllTasks] = useState<Alltasks[]>([]);
  return (
    <div className="bg-slate-500 h-screen text-center">
      <InputFields
        todo={todo}
        setTodo={setTodo}
        setAllTasks={setAllTasks}
        allTasks={allTasks}
      />
      <section className="bg-green-800 max-w-screen-lg mx-auto p-6 mt-2">
        {allTasks.map(({ todo, id }) => (
          <SingleTodo todo={todo} id={id} key={id} isDone={false} />
        ))}
      </section>
    </div>
  );
};

export default App;
