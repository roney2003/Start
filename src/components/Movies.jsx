import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component"
import Loading from "./Loading";


const Movies = () => {

    document.title = "SSDB|Movies";
    
    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const[page,setPage] = useState(1);
    const[movies,setMovies] = useState([]);
    const[hasMore,setHasMore] = useState(true);

    const GetMovies = async () => {
        try {
            const {data} = await axios.get(`/movie/${category}?page=${page}`);
           
            //setTrending(data.results);
            console.log(data);
            if(data.results.length > 0){
            setMovies((prevState)=>[...prevState,...data.results])
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
      if(movies.length === 0){
        GetMovies();
      }else{
        setPage(1)
        setMovies([])
        GetMovies();
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
            Movies
          </h1>
  
          <div className="flex items-center w-[80%]">
            <Topnav />
  
            <Dropdown
              title="now_playing"
              options={["movies", "T.V", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
  
           
          </div>
        </div>
  
        <InfiniteScroll
        
        dataLength={movies.length}
        next={GetMovies}
        hasMore={true}
        loader={<Loading />}
        
        >
          <Cards  data={movies} title="movie" />
        </InfiniteScroll>
        
      </div>
    )

}

export default Movies;

