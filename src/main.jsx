import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// COMPONENTS
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Page Structure
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Details from './pages/Details.jsx';
import Links from './pages/Links.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Landing/>
      <About/>
      <Skills/>
      <Details/>
      <Links/>
      <Footer/>
    </Router>
  </React.StrictMode>,
);