import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'

class App extends Component{

    componentWillMount(){
        this.props.moviesList
    }

    render(){
        return(
            <div>Hello Redux</div>
        )
    }
}

export default connect(actions) (App);