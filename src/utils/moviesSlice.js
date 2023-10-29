import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state,action) =>{
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action) =>{
            state.UpcomingMovies = action.payload;
        },

        addTrailerVideo : (state,action) =>{
            state.trailerVideo= action.payload;
        }
    }

});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;