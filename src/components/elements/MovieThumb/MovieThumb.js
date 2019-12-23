import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import './MovieThumb.css';


const MovieThumb=(props)=>{
    return(
        <div className="rmdb-moviethumb">
            {props.clickable?
                <Link to={{pathname:`/${props.movieId}`, movieName:`${props.movieName}`}}>
                    <img src={props.image}/>
                </Link>
            :<img src={props.image}/>}
        </div>
    )
}

MovieThumb.propTypes={
    image:PropTypes.string,
    movieName:PropTypes.bool
}

export default MovieThumb;