import { Alltasks } from '../types/types';

const SingleTodo = ({ todo }: Alltasks) => {
  return (
    <section className="flex justify-evenly">
      <ul>
        <li className=" bg-yellow-400 w-96 rounded-md m-2 p-2">{todo}</li>
      </ul>

      <div className="flex justify-between gap-3">
        <button className="bg-blue-700 rounded m-2 p-2">Done</button>
        <button className="bg-white text-black rounded m-2 p-2">Edit</button>
        <button className="bg-red-700 rounded m-2 p-2">Delete</button>
      </div>
    </section>
  );
};

export default SingleTodo;
