import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ModalProvider } from './context/ModalContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
