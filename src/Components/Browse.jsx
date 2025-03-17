import React, { useEffect, useState } from 'react';
import Header from "../Components/Header";
import {API_OPTIONS  } from "../utils/Constants";
import { useDispatch , useSelector} from "react-redux";
import { useFetcher } from 'react-router-dom';
import { addNowPlayingMovies, fetchNowPlayingMovies } from '../utils/moviesSlice';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './Maincontainer';
import SecondarayContainer from './SecondaryContainer';
import Gptcompnent from './Gptcompnent';
import GptSearch from "./GptSearch";
import { toggleGptSearchView } from "../utils/GptSlice";



function Browse()
{

 const gptflag = useSelector((store) => store.gpt.getflag)

   useNowPlayingMovies();

 const dispatch = useDispatch();

//  // Access the movies state from Redux store
 const { status, error } = useSelector((state) => state.movies);


//   // Fetch the movies when the component mounts
   useEffect(() => {
     if (status === 'idle') {
       dispatch(fetchNowPlayingMovies());
     }
   }, [dispatch, status]);

  // Show loading state
   if (status === 'loading') {
     return <div>Loading...</div>;
  }

   // Show error if fetch fails
   if (status === 'failed') {
     return <div>Error: {error}</div>;
   }



    return(
        <div>

            
            {console.log(gptflag, 'gpt')}

          { gptflag? (
            <div>
                <div> <Header/></div>
                <div><GptSearch/></div>
            </div>
        
            ):(

                <div>
                    <div> <Header/></div>
            <div>  <MainContainer/></div>
            <div> <SecondarayContainer/></div>
                </div>
            )}


            
           
           
            

            {/* {
                maincontainer-
                  -videobackgroun
                  -videotitle

                secondary container
                -moviesList 
                -cards  
            } */}

        </div>

    )
}
export default Browse;