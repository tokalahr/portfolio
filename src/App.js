import { useState } from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function EmptyPage() {
  return <section className="page-content" />;
}

function ProjectsPage() {
  return (
    <section className="page-content">
      <h1>Nyx</h1>
      <p>
        GitHub Link Placeholder:{' '}
        <a href="https://github.com/tokalahr/hackai-26" aria-label="https://github.com/tokalahr/hackai-26" title="Nyx GitHub Repository">
        </a>
      </p>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page-content">
      <h1>About Me</h1>
      <p>Hi there! I’m Harshith, a sophomore Computer Science student at University of Texas at Dallas.</p>
      <p>
        My journey into tech started with a curiosity for how things work under the hood, which
        quickly evolved into a passion for building efficient, scalable software. Currently, I’m
        focusing my studies on Data Structures and Algorithms while honing my
        skills in Java and Python.
      </p>
      <p>
        When I’m not in the lab, you can find me working on my latest side project, Nyx, or participating in Hackathons. I’m currently looking for
        internship opportunities where I can apply my classroom knowledge to real-world
        challenges.
      </p>
    </section>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="page-shell">
          <header className="navbar">
            <nav>
              <ul className="nav-tabs">
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/about">About Me</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </header>

          <main className="container">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<EmptyPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
