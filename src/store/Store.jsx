import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./reducers/personSlice";
import tvSlice from "./reducers/tvSlice";
import movieSlice from "./reducers/movieSlice";

const Store = configureStore({
    reducer: {
        person: personSlice,
        tv: tvSlice,
        movie: movieSlice
    },
})

export default Store;