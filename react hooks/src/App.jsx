import React, { useRef, useState } from "react";
import MovieCard from "./compenents/MovieCard";
import MovieList from "./compenents/MovieList";
import Filter from "./compenents/Filter";

const App = () => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  function filterMovies(newTitle, newNote) {
    setTitle(newTitle);
    setNote(newNote);
  }
function movieList(movies) {
  return (
  <div>
    {movies.map((movies, index) => (
      <MovieCard
          key={index}
          title={movies.title}
          note={movies.note}
      />
    ))}
  </div>
    );
  }
  return (
    <div>
      <Filter onFilter={filterMovies} />
      <MovieList title={title} note={note} />
    </div>
  )
}

export default App;