import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component"
import Loading from "./Loading";


const Popular = () => {

      document.title = "SSDB|Popular";
  

     const navigate = useNavigate();
     const [category, setCategory] = useState("movie");
     const[page,setPage] = useState(1);
     const[popular,setPopular] = useState([]);
     const[hasMore,setHasMore] = useState(true);




     const GetPopular = async () => {
      try {
          const {data} = await axios.get(`${category}/popular?page=${page}`);
         
          //setTrending(data.results);
          console.log(data);
          if(data.results.length > 0){
          setPopular((prevState)=>[...prevState,...data.results])
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
    if(popular.length === 0){
      GetPopular();
    }else{
      setPage(1)
      setPopular([])
      GetPopular();
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
          Popular
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />

          <Dropdown
            title="category"
            options={["movies", "T.V", "all"]}
            func={(e) => setCategory(e.target.value)}
          />

         
        </div>
      </div>

      <InfiniteScroll
      
      dataLength={popular.length}
      next={GetPopular}
      hasMore={true}
      loader={<Loading />}
      
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
      
    </div>
  );
}


export default Popular;