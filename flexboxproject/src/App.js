import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <span>Cristina Rojas</span>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </nav>
      </header>

      <section className="container">
        <article className="left-article">
          Left Article
        </article>

        <article className="right-article">
          Right Article
        </article>
      </section>

      <footer>
        I'm the footer
      </footer>
    </div>
  );
}

export default App;
