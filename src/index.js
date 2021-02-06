import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.querySelector('#root');
const element = <p>React</p>

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root);
