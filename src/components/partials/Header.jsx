import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[50vh] flex flex-col items-center justify-center p-[5%]"
    >
      <h1 className="text-5xl font-black text-white">
        {data.title ||
          data.name ||
          data.original_name ||
          data.original_title}
      </h1>

      <p className="text-xl text-wrap text-zinc-100">
        {data.overview}...<Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-500">Read More</Link>
      </p>

      <p className="text-white">
        <i className="ri-megaphone-fill text-2xl text-white p-3">
          {data.release_date || "No Info"}
        </i>
        {""}
        <i className="ri-album-fill text-2xl text-yellow-500">
          {data.media_type.toUpperCase()}
        </i>
      </p>
      <br />
      <br />
      <br />
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="bg-blue-400 text-white p-3 rounded-md">Watch Trailers</Link>
    </div>
  );
}

export default Header;
