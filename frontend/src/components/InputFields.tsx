import { Alltasks } from '../types/types';

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  allTasks: Alltasks[];
  setAllTasks: React.Dispatch<React.SetStateAction<Alltasks[]>>;
};

const InputFields = ({ todo, setTodo, allTasks, setAllTasks }: Props) => {
  return (
    <form
      className=" max-w-screen-lg mx-auto bg-slate-600 p-6"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
    >
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button
        onClick={() =>
          setAllTasks([
            ...allTasks,
            { id: Date.now(), todo: todo, isDone: false },
          ])
        }
      >
        ADD
      </button>
    </form>
  );
};

export default InputFields;
