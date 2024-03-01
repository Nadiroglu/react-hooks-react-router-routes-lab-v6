import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";

function Home() {

  const [page, setPage] = useState([])
  console.log(page);

  useEffect(()=> {
    fetch(`http://localhost:4000/movies`)
    .then((r)=> r.json())
    .then((d) => setPage(d))
  },[])

  return (
    <>
      <header>
       <NavBar/>
      </header>
      <main>
        
        <h1>Home Page</h1>
        {page.map((m)=> {
          return <MovieCard id={m.id} movie={m} key={m.id} title={m.title}/>
        })}
       
      </main>
    </>
  );
};

export default Home;
