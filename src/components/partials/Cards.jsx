import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data,title }) => {
  console.log(title);
  return (
    <div className="flex flex-wrap w-[full] h-[full] px-[5%] bg-black">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
            <img className="h-[40vh] object-cover " src={`https://image.tmdb.org/t/p/original/${
                   c.backdrop_path || c.poster_path || c.profile_path}
            `} alt="cards" />
            <h1 className="text-2xl font-semibold text-white">
            {c.title || c.name || c.original_name || c.original_title}
            </h1>

          <div className="absolute right-[-10%] bottom-[50%] rounded-full text-xl  font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex items-center justify-center">
               {(c.vote_average * 10).toFixed(0)}%
          </div>

        </Link>
      ))}
    </div>
  );
};

export default Cards;