import React, { useEffect, useState } from 'react';
import MovieCards from "./MovieCards";


const MovieList =({title,movies})=>{

    return(

        <div>
          {/* <h1 className='text-3xl py-3 text-white'>{title}</h1> */}
        <div className='flex '>
          
            {console.log(movies,'movie list')}

            {/* <div className=' absolute -z-10 opacity-50'>
                              <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp" alt="" className='h-screen object-cover w-screen ' />
                        
                              </div>  */}

            {movies.map((item, index) => (
          
              <MovieCards posterPath={item.poster_path} title={item.title} releasedate={item.release_date}/>
          
          ))}

            {/* <MovieCards posterPath={movies[0].poster_path}/> */}


        </div>
        </div>
    )
}

export default MovieList;