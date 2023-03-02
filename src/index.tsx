import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainList from './Components/MainList/App';
import store from './Components/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainList />
    </Provider>
  </React.StrictMode>
);


