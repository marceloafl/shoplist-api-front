import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './components/store';
import { Provider } from 'react-redux';
import AppRouter from './routes/routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);


