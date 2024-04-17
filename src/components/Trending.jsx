import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component"
import Loading from "./Loading";


function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const[page,setPage] = useState(1);
  const[hasMore,setHasMore] = useState(true)

  const GetTrending = async () => {
    try {
        const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
       
        //setTrending(data.results);
        if(data.results.length > 0){
        setTrending((prevState)=>[...prevState,...data.results])
        setPage(page+1);
        }
        else{
          setHasMore(false);
        }
       
        
    } catch (err) {
        console.log("Error", err);
    }
};

const refreshHandler = async() => {
  if(trending.length === 0){
    GetTrending();
  }else{
    setPage(1)
    setTrending([])
    GetTrending();
  }
}

useEffect(() => {
   refreshHandler();
} , [category,duration]); // jab bhi category ya duration change hoga tabhi useEffect chalega

console.log(trending);

  return (
    <div className="px-[3%] w-screen h-screen bg-black">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className=" text-2xl font semibold text-white">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-white text-2xl"
          ></i>
          Trending
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />

          <Dropdown
            title="category"
            options={["movies", "T.V", "all"]}
            func={(e) => setCategory(e.target.value)}
          />

          <Dropdown title="duration" options={["day", "week", "all"]} func={(e)=>setDuration(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll
      
      dataLength={trending.length}
      next={GetTrending}
      hasMore={true}
      loader={<Loading />}
      
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
      
    </div>
  );
}

export default Trending;
