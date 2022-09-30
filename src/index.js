import React from 'react';
import ReactDom from 'react-dom/client';
import NoteApp from './components/NoteApp';

// styling
import './styles/style.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<NoteApp />);
