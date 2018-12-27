// GET DEFAULT STATE
// SET INITIAL STATE
// BEFORE GET CREATED
// RENDER JSX
// AFTER GET CREATED
import React, {Component} from 'react';

class LifeCycle extends Component{
    // 1 GET DEFAULT STATE
    constructor(props){
        super(props)

        // 2 SET INITIAL STATE
        this.state={
            title:'LifeCycle Hooks'
        }
    }

    
    // 3 BEFORE GET CREATED
    componentWillMount(){
        console.log("before created")
        
    }

    componentWillUpdate(){
        console.log("Before state update",this.state.title)
    }

    componentDidUpdate(){
        console.log("After State Update",this.state.title)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.title)
        console.log(nextState.title)
        if(nextState.title === "Change the title"){
            return true
        }else{
            return false
        }
    }
    // 4 RENDER JSX
    render(){
        return(
            <div>
                <h1>
                    {this.state.title}
                </h1>
                <div onClick={() => this.setState({title:'Change the titles'})}>
                click to change
                </div>
            </div>
        )
    }

     // 5 AFTER GET CREATED
     componentDidMount(){
        console.log("after Created")
        document.querySelector('h1').style.color="red"
    }

    componentWillUnmount(){
        this.setState({title:''})
    }

   


}

export default LifeCycle;