import { useState } from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function EmptyPage() {
  return <section className="page-content" />;
}

function AboutPage() {
  return (
    <section className="page-content">
      <h1>About Me</h1>
      <p>About me text.</p>
    </section>
  );
}

function ExperiencePage() {
  return (
    <section className="page-content">
      <h1>Experience</h1>
      <p>Experience text.</p>
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
                <li><NavLink to="/experience">Experience</NavLink></li>
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
              <Route path="/projects" element={<EmptyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<EmptyPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
