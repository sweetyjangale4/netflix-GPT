import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetion from './GptMovieSuggetion';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
      <img src={BG_URL}
      alt='logo'
      />
    </div>
     <GptSearchBar/>
     <GptMovieSuggetion/>

    </div>
  );
}

export default GptSearch;
