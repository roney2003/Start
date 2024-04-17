import React,{useEffect, useState} from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";



function Home() {
    document.title = "SSDB|Home";

   const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
   const[category,setCategory] =useState("all")

   const GetHeaderWallpaper = async () => {
        try {
            const {data} = await axios.get("/trending/all/day");
           const randomData =  data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomData);
            
        } catch (err) {
            console.log("Error", err);
        }
    };


    const GetTrending = async () => {
      try {
          const {data} = await axios.get(`/trending/${category}/day`);
         
          setTrending(data.results);
          
      } catch (err) {
          console.log("Error", err);
      }
  };

    //console.log(wallpaper);
   

    useEffect(() => {
       !wallpaper && GetHeaderWallpaper();
        GetTrending();
    }, [category]);
      
    //console.log(trending);

    return wallpaper && trending ? (
        <>
         <Sidenav />
           <div className="w-[100%] h-full overflow-auto overflow-x-hidden">
           <Topnav />
           <Header data={wallpaper} />
             
           
      <div className="p-5">
        <h1 className="mb-5 text-3xl font-semibold text-zinc-400">Trending</h1>
        
        <Dropdown title="Filter" options={["tv","movies","all"]} func={(e)=>setCategory(e.target.value)} />
     
      </div>
     




            <HorizontalCards data={trending} func={setCategory} />
          
           </div>

  
        </>
    ) : (
      <Loading />
    )

    }

export default Home;