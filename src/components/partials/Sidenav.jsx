import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios"

function Sidenav() {
  
 

  return (
    <>
      <div className="w-[20%] h-full  border-r-2 border-zinc-400 p-3">
        <h1 className="text-2xl text-white font-bold flex">
          <img className="h-20 w-20 " src="netflix-fill.svg" alt="" />
          <span className="text-2xl">SURYA movies</span>
        </h1>
        <nav className="flex flex-col text-zinc-100 text-xl gap-1">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            NEW FEEDS
          </h1>
          <Link to={"/trending"} className="hover:bg-purple-300 hover:text-white duration-300 rounded p-3">
            <i className="ri-fire-fill"></i>TRENDING
          </Link>
          <Link to={"/popular"} className="hover:bg-purple-300 hover:text-white duration-300 rounded p-3">
            <i className="ri-sparkling-line"></i> POPULAR
          </Link>
          <Link to={"/movies"} className="hover:bg-purple-300 hover:text-white duration-300 rounded p-3">
            <i className="ri-movie-line"></i> Movies
          </Link>
          <Link to={"/tvshows"} className="hover:bg-purple-300 hover:text-white duration-300 rounded p-3">
            <i className="ri-tv-2-line"></i> TV Shows
          </Link>
          <Link to={"/people"} className="hover:bg-purple-300 hover:text-white duration-300 rounded p-3">
            <i className="ri-group-3-fill"></i> PEOPLE
          </Link>
        </nav>
        <hr className=" text-zinc-200 " />
        <nav className="flex flex-col text-zinc-400 text-xl gap-1">
          <h1 className="text-white font-semibold text-xl mt-10">
            WEBSITE INFO
          </h1>
          <Link to={"/about"} className="hover:bg-purple-300 hover:text-white duration-300 rounded p-3">
            <i className="ri-information-line"></i> ABOUT
          </Link>
          <Link to={"/contact"} className="hover:bg-purple-300 hover:text-white duration-300 rounded p-3">
            <i className="ri-contacts-line"></i> CONTACT
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidenav;
