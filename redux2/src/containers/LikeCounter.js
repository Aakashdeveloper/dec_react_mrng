import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { handleLikes} from '../actions';

class LikeCounter extends Component{
    addLikes = (action) => {
        const props = this.props;
        const newLikes = action === 'ADD'?[props.likes+1,props.dislikes]:
            [props.likes,props.dislikes+1]

            this.props.handleLikes(newLikes,props.articleId,
                                    props.section,
                                    props.type
                                    )
    }

    render(){
        return(
            <div className="addlikes-wrapper">
            <h3>How do you feel about this.</h3>
            <div className="addlikes-container">
                <div 
                className="btn like"
                onClick={() => this.addLikes('ADD')}>
                    <div className="hits">{this.props.likes}</div>
                    <div className="icon">
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                    </div>
                </div>
                <br/>
                <br/>
                <div 
                className="btn dislike"
                onClick={() => this.addLikes('REMOVE')}>
                    <div>{this.props.dislikes}</div>
                    <div className="icon">
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({handleLikes},dispatch)
}

export default connect(null,mapDispatchToProps)(LikeCounter);