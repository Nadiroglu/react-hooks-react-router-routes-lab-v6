import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";


function Movie() {

  const [movie, setMovie] = useState([])

  const params = useParams()
  const movieId = params.id
  console.log(params);
  console.log(movie);


 useEffect(()=> {
  fetch(`http://localhost:4000/movies`)
  .then((r)=> r.json())
  .then((d) => {
    setMovie(d)
  })
 },[movieId])

  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <p>Time: {movie.time}</p>
      
    </div>
  );
};
;

export default Movie;
