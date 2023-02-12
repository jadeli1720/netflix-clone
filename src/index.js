import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { firebase } from './services/firebase';
import { FirebaseContext } from './context/firebase';
import './styles/main.scss'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
        <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);


