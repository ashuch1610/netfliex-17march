import React, { useEffect, useState } from 'react';

import {API_OPTIONS  } from "../utils/Constants";
import { useDispatch , useSelector} from "react-redux";
import { useFetcher } from 'react-router-dom';
import { addNowPlayingMovies, fetchNowPlayingMovies } from '../utils/moviesSlice'


const useNowPlayingMovies =()=>{


    const dispatch = useDispatch();
 const getNowPlayingMovies = async()=>{

         try {
             const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
                API_OPTIONS)
    
                  const json = await data.json();
                  console.log(json.results, "data")

                 dispatch(addNowPlayingMovies(json.results))


            
          } catch (error) {

            console.log(error)
            
         }
//before start
//         const myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTJiNmM2MjFmYzg2OTJhNWYxNGE5NDBlODQ2YjQ1YiIsIm5iZiI6MTczNTIwNDU2MC4wMTgsInN1YiI6IjY3NmQxZWQwZDBiMDhmOTcxODYxM2I3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-jCcHAHm2YljCf2xdPW7B_j0iZRWHnh4NPmlTyYp9kE");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("https://corsproxy.io/?https://api.themoviedb.org/3/movie/now_playing?page=1", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// before end

        


    }



     useEffect(()=>{
        getNowPlayingMovies()
     },[])



    // new one
 
    //const dispatch =useDispatch();

      // Access the state to see if movies are being returned
//   const { nowPlayingMovies, status, error } = useSelector((state) => state.movies);

//     useEffect(()=>{
//         dispatch(fetchNowPlayingMovies())
//     },[dispatch])


      // Debugging: Log status and movies
  

}

export default useNowPlayingMovies;