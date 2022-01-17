import React from 'react';
import ReactDOM from 'react-dom';

//routes
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";

import './assets/scss/style.scss';

import reportWebVitals from './reportWebVitals';

//main component
const App = () => useRoutes(routes)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
