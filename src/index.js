import React from 'react';
import ReactDOM from 'react-dom';

import "./App.css";
import App from './App';
//import Reroute from './App';

//import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from "./registerServiceWorker";
//import Counter from './components/counter';
//import "bootstrap/dist/css/bootstrap.css";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render(<Counter />, document.getElementById('root'));
//ReactDOM.render(element, document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//registerServiceWorker();