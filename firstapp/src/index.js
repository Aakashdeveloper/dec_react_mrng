import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'

//JSX
const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hiiii</h1>
            <h1>Hello</h1>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))