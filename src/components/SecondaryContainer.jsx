import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store)=> store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        </div>
      {/* 
      MovieList - Popular
        MovieCards*n
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Hrror
      
       */}
    </div>
    )
  );
}

export default SecondaryContainer;
