import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom'

//Comppnents
import Posts from './components/post';
import Profile from './components/profile';
import PostsDeatil from './components/postDetail';

class App extends Component{
    render(){
        return(
            <div>
                <div class="panel panel-danger">
                    <div class="panel-heading">Home Heading</div>
                    <div class="panel-body">Home Page Content</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
        <BrowserRouter>
            <div>
                <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                        <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li> 
                            <li><Link to="/profile">Profile</Link></li> 
                        </ul>
                        </div>
                    </div>
                    </nav>
                    
                    
                    
                </header>
                <div className="container">
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/posts/:id" component={PostsDeatil}></Route>
                    <Route path="/profile" component={Profile}> </Route>
                </div>
                
            </div>
        </BrowserRouter> , document.getElementById('root'))

