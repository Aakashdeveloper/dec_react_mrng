import React, {Component} from 'react';

class PostsDeatil extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">Posts Detail Heading</div>
                    <div className="panel-body">
                        Post Detail Page Content for article 
                        {this.props.match.params.id}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostsDeatil;