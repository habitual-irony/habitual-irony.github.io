import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import 'core-js';
import store from './store';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>,
)

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
