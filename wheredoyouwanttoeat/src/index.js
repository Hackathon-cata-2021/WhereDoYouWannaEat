import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MainProvider } from './Components/context/MainContext';

ReactDOM.render(
  <MainProvider>
    <script async
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo&libraries=places&callback=initMap">
    </script>
    <App />
  </MainProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
