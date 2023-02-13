import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ResolutionProvider } from './context/ResolutionContext';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResolutionProvider>
    <App />
  </ResolutionProvider>
);
