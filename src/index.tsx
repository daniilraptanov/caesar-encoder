import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const Root = () => {
    render(<App />, document.getElementById('app'));
}

Root();
