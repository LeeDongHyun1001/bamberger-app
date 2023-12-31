import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { bugerStore } from './utilities/content';
import { Provider } from 'react-redux';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={bugerStore}>
      <App />
    </Provider>
);