import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({

    name: "GPT",
    initialState: {
        getflag: false,
    },
    reducers:{

        toggleGptSearchView: (state, action)=>{
                 state.getflag = !state.getflag;
        }

    }
})


export const { toggleGptSearchView} = GptSlice.actions;

export default GptSlice.reducer;
