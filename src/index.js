import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { BrowserRouter } from 'react-router-dom';

const Application = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
};

export default Application;

ReactDOM.render(<Application/>,document.getElementById('root'));

