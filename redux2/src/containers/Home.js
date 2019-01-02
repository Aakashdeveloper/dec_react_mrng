import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { latestNews, otherNews, galleryNews} from '../actions';


//Component
import LatestNews from '../components/Home/Latest';
import OtherNews from '../components/Home/Other';
import Gallery from '../components/Home/Gallery';

class Home extends Component{
    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.galleryNews();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews other={this.props.articles.other}/>
                <Gallery gallery={this.props.gallery.gallery}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log(state)
    return{
        articles: state.articles,
        gallery: state.gallery

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, otherNews, galleryNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);