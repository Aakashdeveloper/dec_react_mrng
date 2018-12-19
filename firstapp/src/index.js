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
            news:JSON,
            filtered: JSON
        }
    }
    
    filterNews(keyword){
        console.log("reciving in index", keyword)
        let result = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
        })

        this.setState({filtered: result})
    }

    render(){
        return(
            <div>
                <Header searchKeyword={(data) => {this.filterNews(data)}}/>
                <NewsList sendNews={this.state.filtered}/>
            
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

function add(){
    var a =10
}
if(){
    let a =10
}
*/