import React from 'react';
import ReactDOM from 'react-dom';

import "./App.css";
import App from './App.js';
import Reroute from './Reroute.js';

//import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from "./registerServiceWorker";
//import Counter from './components/counter';
//import "bootstrap/dist/css/bootstrap.css";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM.render(<Counter />, document.getElementById('root'));
//ReactDOM.render(element, document.getElementById('root'));

function Main() {
    return (<>
        <App />
    </>);
}

root.render(<Main />);

//reportWebVitals();
//registerServiceWorker();
