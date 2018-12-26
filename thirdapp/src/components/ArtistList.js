import React from 'react';
import { Link } from 'react-router-dom'

const ArtistList = (props) => {
    
    const display = ({artistData}) => {
        if(artistData){
            return artistData.map((data) => {
                const style ={
                    background: `url('/images/covers/${data.cover}.jpg')
                        no-repeat`
                }

                return(
                   <Link key={data.id} to={`/artist/${data.id}`} 
                        className="artist_item" style={style}>

                        <div>{data.name}</div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h4> List of Artists</h4>
            {display(props)}
        </div>
    )

}
export default ArtistList;



/*
var a = 10;
var b = 'my age is '+a
var b = `my age is ${a}`
*/