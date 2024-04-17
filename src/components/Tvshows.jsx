import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component"
import Loading from "./Loading";


const Tvshows = () => {


    document.title = "SSDB|Tvshows";
    
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const[page,setPage] = useState(1);
    const[tvshows,setTvshows] = useState([]);
    const[hasMore,setHasMore] = useState(true);


    const GetTvshows = async () => {
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`);
           
            //setTrending(data.results);
            console.log(data);
            if(data.results.length > 0){
            setTvshows((prevState)=>[...prevState,...data.results])
            setPage(page+1);
            }
            else{
              setHasMore(false);
            }
           
            
        } catch (err) {
            console.log("Error", err);
        }
    };

    const refreshHandler = () => {
      if(tvshows.length === 0){
        GetTvshows();
      }else{
        setPage(1)
        setTvshows([])
        GetTvshows();
      }
    }

    useEffect(() => {
       refreshHandler();
    } , [category]); // jab bhi category ya duration change hoga tabhi useEffect chalega


    return (

        <div className="px-[3%] w-full h-full bg-black ">   
        <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className=" text-2xl font semibold text-white">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl"
          ></i>
          Tvshows {category.replace(/_/g," ")}
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="category"
            options={["popular","top_rated","on_the_air","airing_today"]}
            func={(e)=>setCategory(e.target.value)}
          />
        </div>
        </div>
        <InfiniteScroll
          dataLength={tvshows.length}
          next={GetTvshows}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={<h4 className="text-white">No more data</h4>}
        >   
        <Cards data={tvshows} func={setCategory} title="tv"/>
        </InfiniteScroll>
        </div>
    );
}

export default Tvshows;