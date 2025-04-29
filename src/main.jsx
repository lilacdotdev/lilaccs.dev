import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Page Structure
import Shell from './Shell.jsx';

export default function Page() {
  return (
    <Shell/>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);