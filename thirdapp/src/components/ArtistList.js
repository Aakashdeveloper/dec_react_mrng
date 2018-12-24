import React from 'react';
import { Link } from 'react-router-dom'

const ArtistList = (props) => {
    
    const display = ({artistData}) => {
        if(artistData){
            return artistData.map((data) => {
                return(
                    <div>{data.name}</div>
                )
            })
        }
    }

    return(
        <div className="artists_list">
            <h4> List of Artists</h4>
            {display(props)}
        </div>
    )

}
export default ArtistList;