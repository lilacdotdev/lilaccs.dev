import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';

// COMPONENTS
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';

// Page Structure
import Shell from './Shell.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Details from './pages/Details.jsx';
import Links from './pages/Links.jsx';

import NoPage from './pages/NoPage.jsx';


export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route index element={<Landing />} />
          <Route path="About" element={<About />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Details" element={<Details />} />
          <Route path="Links" element={<Links />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);