import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust the import path if necessary
import './index.css'; // Optional: Include global styles if you have any

const rootElement = document.getElementById('root'); // Ensure you have a <div id="root"></div> in your index.html

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
