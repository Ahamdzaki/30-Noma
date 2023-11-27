import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
export default function MoviesList(props) {


  const [movies,setMovies] = useState([])


  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${props.route}?api_key=4649ea27d6b27686608882c5df560ab1`)
    .then(response => response.json())
    .then(data => setMovies(data.results));
  },[props.route]);

  useEffect(()=> {
    if(props.route === "now_playing"){
      document.title =`Home - ${props.route}`;
    }
    else if (props.route === "top_rated"){
      document.title = `movies - ${props.route}`;
    }
    else if (props.route ==="popular"){
      document.title =`movies - ${props.route}`;
    }
    else if (props.route === "upcoming"){
      document.title= `movies - ${props.route}`;
    }

  })
 
  return(
    <main>

      <div className="flex flex-wrap justify-evenly mx-auto">
        { movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>

    </main>
  )
}
