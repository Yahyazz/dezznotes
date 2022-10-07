import React from 'react';
import ReactDom from 'react-dom/client';
import NoteApp from './App';
import { BrowserRouter } from 'react-router-dom';

// styling
import './styles/style.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
);
