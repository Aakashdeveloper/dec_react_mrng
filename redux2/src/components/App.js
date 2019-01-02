import React, { Component } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';

// container
import Home from '../containers/Home'
import NewsPage from '../containers/NewsPage';

// component
import Header from './Header';
import Footer from './Footer'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/news/:id" component = {NewsPage}/>
            <br/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
