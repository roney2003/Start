import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Person from "./components/Person";
import Trailer from "./components/partials/Trailer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className=" bg-zinc-800 w-screen h-screen flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />

          {/* Movie Routes */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/details/:id" element={<Moviedetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer/>} />
          </Route>
          {/* TV Show Routes */}
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/tv/details/:id" element={<Tvdetails />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer/>} />
          </Route>

          {/* People Routes */}
          <Route path="/people" element={<People />} />
          {/* Assuming Person component expects id as a prop */}
          <Route path="/person/details/:id" element={<Person />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
