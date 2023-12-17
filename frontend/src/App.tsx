const App: React.FC = () => {
  return (
    <div className="bg-slate-500 text-red-500 h-screen justify-between flex flex-col text-center">
      <header className="bg-zinc-700 text-white h-9 py-4">header</header>
      <main className="flex-1 bg-red-300">main</main>
      <footer className="bg-zinc-700 text-white text-center">
        &copy; All Rights Reserved
      </footer>
    </div>
  );
};

export default App;
