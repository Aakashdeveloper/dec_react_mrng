import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'
import JSON from './db.json';
import NewsList from './components/News_list'

//JSX
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList sendNews={this.state.news}/>
            
            </div>
            
        )
    }
    
}

ReactDOM.render(<App/>, document.getElementById('root'))




/*
const App = () => {
    console.log(JSON)
    return(
        <div>
            <Header/>
            <h1>Hiiii</h1>
            <h1>Hello</h1>
        </div>
        
    )
}
*/