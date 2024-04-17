import React, { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie } from "../store/actions/movieActions";
import { removemovie } from "../store/reducers/movieSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards"
import { asyncloadtv, removetv } from "../store/actions/tvActions";

const Tvdetails = () => {

    const {pathname} = useLocation(); // ye location se path utha raha hai
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams(); // ye id url se utha raha hai
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      // cleanup
      dispatch(removetv());
    }
  }
  , [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-screen h-[180vh] px-[10%]"
    >
      <nav className="w-full flex gap-10 mt-4">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-white text-2xl"
        ></Link>{" "}
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-line text-2xl text-green-500"></i>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${info.detail.homepage}`}
          target="_blank"
        >
          <i className="ri-earth-line text-2xl text-white"></i>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${info.detail.homepage}`}
          target="_blank"
        >
          <i className="ri-netflix-fill text-2xl text-red-600"></i>
        </a>
      </nav>

     

      {/** Movie Details */}
      <div className="w-full flex">
      <img
            className="h-[50vh] object-cover mt-10 rounded-md "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }
            `}
            alt="cards"
          />

              <div className="content ml-[5%]">
                 <h1 className="text-5xl text-white font-black">
                 {info.detail.title || info.detail.name || info.detail.original_name || info.detail.original_title}
                         
                         <small className="text-2xl font-bold text-zinc-100">
                           ({info.detail.first_air_date.split("-")[0]})
                         </small>

                 </h1>
                      
                     <div className="flex text-zinc-100 items-center gap-x-5 mt-4">
                            
                     <span className=" rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center" >
                              {(info.detail.vote_average * 10).toFixed(0)}%
                        </span>
                        <h1 className="font-semibold text-2xl ">User Score</h1>
                        <h1>{info.detail.first_air_date}</h1>
                        <h1>{info.detail.genres.map(g => g.name).join(",")}</h1>
                        <h1>{info.detail.runtime}min</h1>
                     </div>
                        
                    <h1 className="text-xl font-semibold italic text-zinc-100">{info.detail.tagline}</h1>
                    <h1 className="text-xl font-semibold italic text-zinc-100 mt-5">{info.detail.overview}</h1>
                    <h1 className="text-xl font-semibold italic text-zinc-100 mt-5">Budget: ${info.detail.budget}</h1>
                    <h1 className="text-xl font-semibold italic text-zinc-100 mt-5">Movie translated:
                          <p className="mb-10">{info.translations.slice(0,10).join(",")}</p>
                    </h1>
                    
                    <Link className="bg-blue-400 text-white p-3 rounded-md" to={`${pathname}/trailer`}>Watch Now</Link>

              </div> 

        </div>
          {/* part 3 movie details */}

          
          <div>
            {info.watchproviders &&
            info.watchproviders.flatrate &&
              info.watchproviders.flatrate.map((w, index) => (
                <img
                  key={index} // Adding a unique key for each image element
                  className="w-[5vh] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} // Checking if logo_path is available before generating image source
                  alt=""
                />
              ))}
                 
                 {info.watchproviders &&
            info.watchproviders.buy &&
              info.watchproviders.buy.map((w, index) => (
                <img
                  key={index} // Adding a unique key for each image element
                  className="w-[5vh] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} // Checking if logo_path is available before generating image source
                  alt=""
                />
              ))}



          </div>
          {/* recommendations and similar stuff */}
              
            <h1 className="text-4xl text-white font-black mt-[3%] p-2">Seasons</h1>
              <div className="w-[100%]   flex  overflow-y-hidden mb-5">
                {info.detail.seasons.map((d, i) => (
                    <div key={i} className=" mr-5">
                         <img key={i} className="shadow -[8px_17px_38px_2px_rgba(0,0,0,.5)]  object-cover w-[15vw] h-[30vh]" 
                         
                         src={`https://image.tmdb.org/t/p/original/${d.poster_path}`}
                         alt="" />

                     <h1 className="text-xl font-semibold text-white">
                           {d.title || d.name || d.original_name || d.original_title}
                     </h1>
                        
                    
                    </div>
                ))}
                       
             </div>

                
                
                


            <h1 className="text-4xl text-white font-black mt-[3%] p-2">Recommendations</h1>
            <HorizontalCards data={info.recommendations.results}  />
     
     
         
<Outlet/>

      </div>
   
  ) : (
    <Loading />
  );

}

export default Tvdetails;

