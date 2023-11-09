import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import evo from "./assets/evo.jpg";
import Test from "../challenges/props";

function Header() {
  return (
    <header>
      <p>Kramer is back</p>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header title="kramer" image={evo} />
        <Test />
        <p>Before we start this is our goal</p>
        <img src={evo} alt="evo" size="300" />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React=Kramer Job</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
