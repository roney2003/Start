import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation,useNavigate } from "react-router-dom";
import Loading from "../Loading";

function Trailer() {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
   const ytvedio=  useSelector((state) => state[category].info.vedios);
    console.log(ytvedio,pathname);
    return  (
        <div className="absolute bg-[rgba(0,0,0,.6)]  z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center ">
           <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-white text-2xl left-2 top-0 absolute"
        ></Link>{" "}
       {ytvedio ? < ReactPlayer
        height={800}
        width={1200}
        url={`https://www.youtube.com/watch?v=${ytvedio.key}`}
        controls
        /> : <Loading/>}
        </div>
    )
    }

export default Trailer;