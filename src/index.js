import React from 'react';
import ReactDom from 'react-dom/client';
import ContactApp from './components/ContactApp';

// styling
import './styles/style.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<ContactApp />);
