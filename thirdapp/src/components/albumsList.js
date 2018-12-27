import React from 'react';

const AlbumList = (props) => {

    const showList = ({albumList}) => {
        if(albumList){
            return albumList.map((data,index) => {
                return(
                <img key={index} src={`/images/albums/${data.cover}.jpg`} />
                )
        })
        }

    }

    return(
        <div className="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;