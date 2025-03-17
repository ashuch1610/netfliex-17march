import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import addNowPlayingMovies from "../utils/moviesSlice";

function SecondarayContainer()
{

   
 


    const movies = useSelector(state => state.movie?.nowPlayingMovies);
    
        console.log('inside secodn maincontainer', movies);
    
        // Check if 'movies' exists before rendering
        if (!movies) {
            return <div  className='pt-36'>Loading...</div>;  // Or show some loading state
        }
    
 
   
      
    return(

       <div>
     

        
        <MovieList  className='relative z-20 ' title={"Now Playing"} movies={movies}/>
        <MovieList  title={"Now Trending"} movies={movies}/>
        <MovieList  title={"Now Horror"} movies={movies}/>
        
        {/* movie List -popular
        moviecard*n
        movieList - now nowPlayingMovies
        movieList -trending
        movielist -horror */}
       </div>
    )

}


export default SecondarayContainer;