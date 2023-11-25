import React from 'react';
import ReactDOM from 'react-dom';

import "./App.css";
import App from './App.js';
import Reroute from './Reroute.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    return (<>
        <App />
        <Reroute />
    </>);
}

root.render(<Main />);
