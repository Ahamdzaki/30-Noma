import {Link} from "react-router-dom"
import Logo from "../img/Logo.jpeg"


export default function Card({movie}) {

  const {id,overview,original_title,poster_path} = movie;
 
  function OverviewTruncate(text,maxLength){
    if(text <= maxLength){
      return text
    }
    else {
      return text.slice(0,maxLength);
    }
  }

  return (  
    <div className=" m-4">
        <div className=" max-w-sm border rounded-lg dark:border-slate-600 ">
        
              <Link to={`/movie/${id}`}>
                <img className=" rounded-t-lg" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
              </Link>
          
          <div className="">
            <h5 className="text-2xl font-bold m-2 text-center dark:text-white">{original_title}</h5>
            <div className="">
            <p className="m-4 text-lg text-left dark:text-slate-300">{OverviewTruncate(overview,100)} ...</p>
            <Link to= {`/movie/${id}`} className="m-2 mb-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
            </Link>
            </div>
          </div>
        </div>
    </div>

    
  )
}
