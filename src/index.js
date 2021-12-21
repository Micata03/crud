import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './componentes/Context';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
     <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);