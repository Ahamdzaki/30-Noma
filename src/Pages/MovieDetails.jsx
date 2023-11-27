import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
export default function MovieDetails() {
  const Params = useParams();

    const [movie,setMovie] = useState([]);
    const {overview,original_title,poster_path,original_language,popularity,revenue,status,release_date,vote_average,vote_count,imdb_id} = movie;

    useEffect(()=> {
      fetch(`https://api.themoviedb.org/3/movie/${Params.id}?api_key=4649ea27d6b27686608882c5df560ab1`)
      .then(response => response.json())
      .then(data => setMovie(data))
    },[]);
    useEffect(()=> {
      document.title= `${original_title} - details`
    })
  return (
    <main>
      <div className="flex  flex-wrap justify-center items-center my-8 text-lg dark:text-white">
        <div className="w-96 my-12">
            <img  className="rounded-lg" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="logo" />
        </div>
        <div className="p-8">
          
          <h1 className="font-bold text-3xl mb-2 ">{original_title}</h1>
          <div>
            <spnn className= "font-bold text-lg ">Languages: </spnn>
            <spnn className= "font-bold dark:text-slate-400">{original_language}</spnn>
          </div>
          <p className="max-w-xl dark:text-slate-400">{overview}</p>
          
          <div className="my-4">
                <div>
                  <span className="font-bold">Popularity: </span>
                  <span className='dark:text-slate-400'>{popularity}</span>
                </div>

                <div>
                  <span className="font-bold">Revenue: </span>
                  <span className='dark:text-slate-400'>{revenue}</span>
                </div>

                <div>
                  <span className="font-bold">Vote_Average: </span>
                  <span className='dark:text-slate-400'>{vote_average}</span>
                </div>

                <div>
                  <span className="font-bold">Vote_count: </span>
                  <span className='dark:text-slate-400'>{vote_count}</span>
                </div>

                <div>
                  <span className="font-bold">Status: </span>
                  <span className='dark:text-slate-400'>{status}</span>
                </div>

                <div>
                  <span className="font-bold">Released_Date: </span>
                  <span className='dark:text-slate-400'>{release_date}</span>
                </div>

                <div>
                <span className="font-bold">IMDB Link: </span>
                  <a className="underline text-blue-700" target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${imdb_id}`} >{imdb_id}</a>
                </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </main>
  )
}
