import React, { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson } from "../store/actions/personActions";
import { removeperson } from "../store/reducers/personSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards"

const Person = () => {

    const {pathname} = useLocation(); // ye location se path utha raha hai
    const navigate = useNavigate();
    const { info } = useSelector((state) => state.movie);
    const { id } = useParams(); // ye id url se utha raha hai
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(asyncloadperson(id));
      return () => {
        // cleanup
        dispatch(removeperson());
      }
    }
    , [id]);


    return  (
        <div className="px-[5%] w-screen">
            <nav className="w-full flex gap-10 mt-4">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-white text-2xl"
        ></Link>{" "}
        {/*
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
    </a>*/}
    </nav>


    <div className="w-full h-[100vh] flex items-center justify-center">
        {info ? (
            <div className="w-30 h-[30vh] flex items-center justify-center">
                <div className="w-[10%] h-[20%] relative">
                <img
                    src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                    alt={info.detail.name}
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
                <div className="w-[70%] h-[90%] px-4">
                <h1 className="text-3xl font-semibold text-white">
                    {info.detail.name}
                </h1>
                <p className="text-white text-lg">{info.detail.biography}</p>
                <h1 className="text-2xl font-semibold text-white">Known For</h1>
                <HorizontalCards data={info.known} type="movie" />
                </div>
            </div>
            ) : (
            <Loading />
            )}
            </div>

        </div>
    )
}


        



export default Person;