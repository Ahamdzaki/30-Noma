import MoviesList from "../Pages/MoviesList"
import MovieDetails from "../Pages/MovieDetails"
import PageNotFound from "../Pages/PageNotFound"
import Search from "../Pages/Search"

import { Routes, Route } from "react-router-dom"

export default function AllRoutes() {
  return (
    <div className="">
      
       <Routes>
          <Route path="/" element={ <MoviesList route="now_playing"/>} />
          <Route path="/movies/top" element={ <MoviesList route="top_rated" />} />
          <Route path="/movies/popular" element={ <MoviesList route="popular" />} />
          <Route path="/movies/upcoming" element={ <MoviesList route="upcoming" />} />
          <Route path="/movie/:id" element={ <MovieDetails />} />
          <Route path="/search/:title" element={ <Search />} />
          <Route path="*" element={<PageNotFound />} />  
        </Routes> 
      
    </div>

  )
}
