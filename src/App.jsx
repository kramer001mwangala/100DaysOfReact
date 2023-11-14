import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import Test from "../challenges/props";

function Header({ image, title, description }) {
  return (
    <header>
      <h3>{title}</h3>
      <img src={image} alt={title} />

      <p>{description}</p>
    </header>
  );
}
/*{
  CORE_CONCEPTS.map((concept, index) => (
    <Concept
      key={index}
      title={concept.title}
      image={concept.image}
      description={concept.description}
    />
  ));
}*/

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header title="kramer" />
        <section id="core-concepts">
          <Header
            title={CORE_CONCEPTS[0].title}
            image={CORE_CONCEPTS[0].image}
            description={CORE_CONCEPTS[0].description}
          />
          <Header
            title={CORE_CONCEPTS[1].title}
            image={CORE_CONCEPTS[1].image}
            description={CORE_CONCEPTS[1].description}
          />
          <Header
            title={CORE_CONCEPTS[2].title}
            image={CORE_CONCEPTS[2].image}
            description={CORE_CONCEPTS[2].description}
          />
          <Header {...CORE_CONCEPTS[1]} />
        </section>
        <Test />
        <p>Before we start this is our goal</p>
        <img src="" alt="evo" size="300" />
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
