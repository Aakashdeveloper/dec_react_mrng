import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
    render(){
        return(
            <div>
                <div class="panel panel-primary">
                    <div class="panel-heading">Posts Heading</div>
                    <div class="panel-body">
                        <Link to="/posts/1">Article 1</Link><br/>
                        <Link to="/posts/2">Article 2</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Posts