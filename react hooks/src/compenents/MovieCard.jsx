import React from "react";

const MovieCard = ({title, description, posterURL, note}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={posterURL} alt="movie" />
            <p>{note}</p>
        </div>
    )
}

export default MovieCard;