import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/Constants";
import {addNowPlayingMovies ,fetchNowPlayingMovies}  from "../utils/moviesSlice";

const MovieCard = ({ posterPath , title,releasedate}) => {


    const movies = useSelector(state => state.movie?.nowPlayingMovies);
    console.log(movies,'inside title search')
    console.log(posterPath)

    return (
        <div className='bg-black bg-opacity-{50}'>

            {/* <img className={"m-5"}  src={IMG_CDN_URL + posterPath}/>  */}


            <div className='ml-3 w-60 mt-4 '>

                <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white ">
                    {/* Movie Image */}
                    <img
                        className="w-full h-56 object-cover"
                        src={IMG_CDN_URL + posterPath}

                    />
                    {/* Movie Content */}
                    <div className="px-4 py-2 bg-black bg-opacity-{80}">
                        {/* Title */}
                        <h2 className="text-xl font-semibold text-white">{title}</h2>
                        {/* Release Date */}
                        <p className="text-white text-sm">Release Date: {releasedate}</p>
                        {/* Description */}
                      
                    </div>
                 
                    </div>
                </div>

            </div>
  
    )
}

export default MovieCard;