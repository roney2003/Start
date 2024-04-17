import axios from "../../utils/Axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.png";


function Topnav() {
  
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      setSearches(data.results);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex m-auto items-center">
      <i className="ri-search-line text-white text-2xl p-2"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        className="w-[50%] h-[50%] p-2 bg-transparent text-zinc-400 border-1 border-zinc-200 rounded-md top-5"
        placeholder="Search"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill text-white text-3xl p-2 "
        ></i>
      )}

      <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%]  right-[45%] text-zinc-400 overflow-auto rounded-md">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 bg-zinc-100  w-[100%] p-10 flex justify-center items-center border-b-2 border-zinc-200 font-semibold"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded-md mr-5"
              src={
                s.backdrop_path ||
                s.profile_path ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                }` : noimage
              }
              alt=""
            />
            <span>{s.name ||
                  s.title ||
                  s.original_name ||
                  s.original_title
            }
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
