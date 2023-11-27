import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Search() {
  
  const Params = useParams();
  const [movies ,setMovies] = useState([]);
  
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4649ea27d6b27686608882c5df560ab1&&query=${Params.title}`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  });

  useEffect(()=> {
    document.title =`Search - ${Params.title}`
  })

  return (
    <main>
      <div className="flex flex-wrap justify-evenly mx-auto">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          }
      </div>
    </main>
  )
}
