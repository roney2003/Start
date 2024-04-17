import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom"



function HorizontalCards({ data }) {
  return  (
    

     

      <div className="w-[100%] h-[35vh]  flex  overflow-y-hidden mb-5">
        {data.length > 0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%]  bg-zinc-600 mr-5">
            <img
              className="w-full h-[55%] object-cover rounded-md hover:opacity-50 transition-all duration-300"
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
              alt=""
            /> 
            <h1 className="text-2xl font-black text-white ">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>

            <p className="text-xl text-wrap text-zinc-100">
              {d.overview.slice(0,20)}...<span className="text-blue-500">Read More</span>
            </p>
          </Link>
        )): <h1 className="text-2xl text-white">No Data Found</h1>}
      </div>
    
  );
}

export default HorizontalCards;
