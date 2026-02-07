import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="w-1/4 border border-cyan-600 py-10 rounded-md">
          <h2 className="text-3xl text-center capitalize mb-4 text-cyan-600">
            react-redux practice
          </h2>

          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
