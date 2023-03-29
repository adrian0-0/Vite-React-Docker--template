import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="header"></header>
      <main className="main">
        <p>
          <div className="main__block">
            aasorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut
            atque accusantium praesentium! Dolore quia esse facilis adipisci,
            dolores quaerat ducimus, accusamus incidunt impedit ipsa ex alias
            itaque nam officia?
          </div>
        </p>
        <div className="inline__block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum
          architecto maxime facere. Pariatur obcaecati, temporibus facilis
          accusantium repellendus ad, fugit animi quis ducimus quia consectetur
          quas autem consequatur eius.
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
