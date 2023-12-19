import { useState } from 'react';
import { Alltasks } from './types/types';
import SingleTodo from './components/SingleTodo';
import InputFields from './components/InputFields';

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
