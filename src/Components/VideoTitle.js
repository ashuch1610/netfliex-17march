import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { nowPlayingMoviesKey } from '../utils/moviesSlice'
import useMovieTrailer from '../hooks/useMovieTrailer';


function VideoTitle({ title, id }) {
    const trailervideos = useSelector(store => store.movies?.trailervideos)
    const trailervideosId = useSelector(store => store.movies?.id)
    console.log(trailervideosId, 'using useselector')



    console.log(trailervideos, 'trailervideossssss')

    useMovieTrailer();



    return (

        <div className='bg-gradient-to-r from-black w-screen aspect-video pt-[5%]'>
            {/* <div className='bg-gradient-to-r from-black w-screen aspect-video pt-[20%]'>

              
                <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>play</button>
                <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>info\ more info</button>
            </div> */}

            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/qSu6i2iFMO0?autoplay=1&mute=1" + trailervideos}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />

        </div>
    )

}


export default VideoTitle;