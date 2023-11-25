import React from 'react';
import ReactDOM from 'react-dom';

import "./App.css";
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
    return (<>
        <App />
    </>);
}

root.render(<Main />);
