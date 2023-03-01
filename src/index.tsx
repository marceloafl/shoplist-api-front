import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainList from './Components/MainList/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainList />
  </React.StrictMode>
);


