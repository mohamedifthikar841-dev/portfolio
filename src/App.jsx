import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Mohamed Ifthikar. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;