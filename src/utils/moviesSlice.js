import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

import {API_OPTIONS  } from "../utils/Constants";

export const fetchNowPlayingMovies =createAsyncThunk('fetchNowPlayingMovies', async()=>{

  const response = await fetch(`https://api.themoviedb.org/3/movie/939243/videos?language=en-US`, API_OPTIONS)
    const data = await response.json();
    console.log(data.results, 'inside thunk new')
    return data.results;

})

 const moviesSlice =createSlice({
  name:"movies",
  initialState: {
    addNowPlayingMovies:null,
    tarilerVideo: null,
    nowPlayingMoviesKey:null,
    nowPlayingMoviesId:null,
    id:null,
    status:'',
    error:false

  },
  reducers:{
    addNowPlayingMovies:(state , action)=>{
      console.log("reducer1",state)
        state.nowPlayingMovies = action.payload;
    },

    nowPlayingMoviesKey:(state, action)=>{
      console.log("reducer1=2",state)
      state.nowPlayingMoviesKey = action.payload;

    },
    nowPlayingMoviesId:(state, action)=>{
      console.log("reducer3",state)
      state.nowPlayingMoviesId = action.payload;

    }

    
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.nowPlayingMovies = action.payload;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

})

//export default userSlice;
export const { addNowPlayingMovies,nowPlayingMoviesKey,nowPlayingMoviesId  } = moviesSlice.actions; // export the actions
export default moviesSlice.reducer; // export the reducer as default