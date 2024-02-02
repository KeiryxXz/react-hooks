import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "/src/MovieList.css";

const MovieList = ({ title, note }) => {
    const [movies, setMovies] = useState([
        {
            title: "The Equalizer",
            description: "With his violent past behind him, McCall decides to lead a quiet life. However, when he sees a young girl, Teri, being controlled by violent gangsters, he once again takes up the fight for justice.",
            posterUrl: "/src/assets/equalizer.jpg",
            note: "7.2/10"
        },
        {
            title: "The Maze Runner",
            description: "Thomas loses his memory and finds himself trapped in a massive maze called the Glade. He and his friends try to escape from the maze and eventually learn that they are subjects of an experiment.",
            posterUrl: "/src/assets/maze.jpg",
            note: "9.5/10"
        },
        {
            title: "The Hunger Games",
            description: "Katniss volunteers to replace her sister in a tournament that ends only when one participant remains. Pitted against contestants who have trained for this all their life, she has little to rely on.",
            posterUrl: "/src/assets/hunger.webp",
            note: "7.2/10"
        }
    ]);

    const [newMovie, setNewMovie] = useState(
        {
            title: "",
            description: "",
            posterUrl: "",
            note: ""
        }
    );

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewMovie((prevMovies) => ({
            ...prevMovies,
            [name]: value
        }));
    };

    const handleAddMovie = () => {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
        setNewMovie(
            {
                title: "",
                description: "",
                posterUrl: "",
                note: ""
            }
        );
    };

    const filteredMovies = movies.filter(
        (movies) => 
            movies.title.toLowerCase().includes(title.toLowerCase()) &&
            movies.note.includes(note)
    );

    return(
        <div>
        <div className="addMovie">
            <input 
                placeholder="Title :"
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleInputChange}
            />
            <input 
                placeholder="Description :"
                type="text"
                name="description"
                value={newMovie.description}
                onChange={handleInputChange}
            />
            <input 
                placeholder="Poster"
                type="text"
                name="posterUrl"
                value={newMovie.posterUrl}
                onChange={handleInputChange}
            />
            <input 
                placeholder="Note"
                type="text"
                name="note"
                value={newMovie.note}
                onChange={handleInputChange}
            />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
        <div className="List">
            <h1>List of movies</h1>
            {filteredMovies.map((movies, index) => (
                <MovieCard
                    key={index}
                    title={movies.title}
                    description={movies.description}
                    posterURL={movies.posterUrl}
                    note={movies.note}
                />
            ))};
        </div>
        </div>
    );
};

export default MovieList;