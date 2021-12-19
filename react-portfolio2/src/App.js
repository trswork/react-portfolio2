import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About>About Me</About>
        <Portfolio>Portfolio</Portfolio>
      </main>
    </div>
  );
}

export default App;
