
import TriviaForm from "./components/TriviaForm";
import TriviaList from "./components/TriviaList";

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Trivia Generator</h1>
      <TriviaForm />
      <TriviaList />
    </div>
  );
}

export default App;
