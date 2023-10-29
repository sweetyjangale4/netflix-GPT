import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggetion = () => {
    const {movieResults,movieNames} =useSelector((store) => store.gpt);
    // if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white opacity-90'>
      <h1>movieNames[0]</h1>
      {/* <div>
        {movieNames.map((movieName,index) =>(
      <MovieList
      key={movieName}
      title={movieNames}
      movies={movieResults[index]} 
      />))}
      </div> */}
      
    </div>
  );
}

export default GptMovieSuggetion;
