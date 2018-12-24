import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from '../components/ArtistList'

import {Api_Link} from '../constants/APIURL';

class Home extends Component{
    constructor(props){
        super(props);
        console.log("constructer section")
        this.state = {
            artists:''
        }

    }

    

    render(){
        console.log("render hook")
        return(
            <div>
                <Banner></Banner>
                <ArtistList artistData={this.state.artists}></ArtistList>
            </div>
        )
    }

    componentDidMount(){
        console.log("lifecycle hook")
        fetch(Api_Link,{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                artists:json
            })
        })
    }

    
}

export default Home;