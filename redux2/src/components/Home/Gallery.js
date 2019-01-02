import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const showGallery = ({gallery}) => {
    if(gallery){
        return(
           <Slider {...settings}>
                {gallery.map((item) =>{
                    return(
                        <Link to={`/galleries/${item.id}`}
                            key={item.id}
                            className="slider-item">
                                <div className="image"
                                style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                                <h3>{item.artist}</h3>
                                </div>
                        </Link>
                    )
                })}
           </Slider>
        )
    }
}

const Gallery = (props) => {
    return(
        <div className="home-gallery">
            <h2>News Gallery</h2>
            {showGallery(props)}
        </div>
    )
}

export default Gallery;