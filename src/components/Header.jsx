
import { Link, NavLink,json,useNavigate} from "react-router-dom"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from "@mui/material";
import Mooi from "../img/Mooi.jpg"
import { useEffect, useState } from "react";
export default function Header(){

  const navigater = useNavigate()

  const [darkMode,setDarkmode] = useState(JSON.parse(localStorage.getItem("darkmode"))||false);

  useEffect(()=> {
    localStorage.setItem("darkmode",JSON.stringify(darkMode));
    if(darkMode === true){
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])

 
  function handleSubmit(event){
    event.preventDefault();
    const title = event.target.search.value;
    navigater(`search/${title}`);
    event.target.reset();
  }

  
  return (
    
    <div className="flex flex-wrap max-w-full  justify-between  m-auto border-b dark:border-b-slate-700 dark:shadow-lg p-8 items-center  dark:bg-slate-900">
        <div className="flex items-center ml-14">
          <Link to="/">
            <img className="w-20 rounded-full mr-2" src={Mooi} alt="Logo" />
          </Link>
          <h2 className="text-2xl font-bold dark:text-white">Mooi</h2> 
        </div>

        <nav className="mr-14">
            <NavLink to="/" className="hover:text-blue-700 m-2 text-lg font-xl font-bold p-3  dark:hover:text-blue-100 dark:text-blue-700">Home</NavLink>
            <NavLink to="/movies/top" className=" hover:text-blue-700 m-2 text-lg font-xl font-bold p-3 dark:hover:text-blue-100  dark:text-blue-700">Top</NavLink>
            <NavLink to="/movies/popular" className=" hover:text-blue-700 m-2 text-lg font-bold p-3 dark:hover:text-blue-100    dark:text-blue-700">Popular</NavLink>
            <NavLink to="/movies/upcoming" className="hover:text-blue-700 m-2 text-lg font-bold p-3 dark:hover:text-blue-100    dark:text-blue-700">Upcoming</NavLink>
        </nav>
        <div className="flex items-center md:flex md:items-center z-[-1] md:z-auto">
          <form onSubmit={handleSubmit}>
            <TextField onClick={handleSubmit} className={darkMode ? "dark:border-blue-700 placeholder:bg-white text-white":"border"} autoComplete="off" placeholder="Search" type="buttton" name="search" style={{width:"200px"}} InputProps={{startAdornment:(<SearchIcon className={darkMode ? "dark:text-blue-700" : ""} />)}}/>

          </form>
          <span onClick={()=>setDarkmode(!darkMode)}>
          {
            darkMode ? <LightModeOutlinedIcon className="ml-4"  color="primary" /> : <DarkModeOutlinedIcon className="ml-4" />
          }
          </span>
          
        </div>

        
            
    </div>
  )
}
