import React, { useEffect, useState } from 'react';
import { useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";


function MainContainer()
{
    const movies = useSelector(state => state.movie?.nowPlayingMovies);

    console.log('inside maincontainer', movies);

    // Check if 'movies' exists before rendering
    if (!movies) {
        return <div  className='pt-36'>Loading...</div>;  // Or show some loading state
    }



    // let mainmovie = movies[0]

    // const {title, id} = mainmovie;

    // console.log('main',mainmovie)
    return(

       <div className='pt-[7%]'>
      
        {/* <VideoTitle title={title}  id={id}/> */}

        <VideoTitle/>
       
       </div>
    )

}


export default MainContainer;