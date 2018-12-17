import React, {Component} from 'react';


class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            title:'***Logo***',
            keywords:'Search Keyword'
        }
    }

    inputChanges = (event) => {
        console.log(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo"
                    onClick={() => {console.log("clicked")}}
                >{this.state.title}
                </div>
                <center>
                    <input type="text"
                    onChange={this.inputChanges}/>
                    <p>{this.state.keywords}</p>
                </center>
            </header>
        )
    }
}

export default Header;



/*
const Header = () => {
    return (
        <header>
            <div>Logo</div>
            <input type="text"/>
        </header>
    )
}
=====================
        const mystyles = {
            header: {
                background:'tomato'
            },
            logo:{
                color:'#fff',
                textAlign:'center',
                fontSize:'30px'
            }
        }

        return(
            <header style={mystyles.header}>
                <div style={mystyles.logo}>Logo</div>
                <center>
                    <input type="text"/>
                </center>
            </header>
        )
*/