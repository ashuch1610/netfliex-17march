import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS  } from "../utils/Constants";
import { nowPlayingMoviesKey , nowPlayingMoviesId} from '../utils/moviesSlice'



const useMovieTrailer =()=>{
    
    
   const trailervideos = useSelector(store=>store.movies?.trailervideos)
   console.log(trailervideos, 'trailervideo')
    const dispatch = useDispatch()



    const getMovieVideos= async()=>{
       
            let res=  await  fetch('https://api.themoviedb.org/3/movie/939243/videos?language=en-US', API_OPTIONS)
          const data = await res.json()

          console.log(data ,'1st inside video title')

          const trailerData =  data.results.filter((item)=>{return  item.type == 'Trailer'})
          const movieTrailer = trailerData[0]
       

          dispatch(nowPlayingMoviesKey(movieTrailer))

          const movieTrailerId = trailerData[0].key;
          console.log(movieTrailerId, 'Id')

          dispatch(nowPlayingMoviesId(movieTrailerId))




          console.log(movieTrailer, '2nd inside video title')

      
        
    }

    useEffect(()=>{
        getMovieVideos()
    },[])
}

export default useMovieTrailer;