import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers:{
        addSong(state, actions){
            state.push(actions.payload);
        },
        removeSong(state, actions){
            const index = state.indexOf(actions.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder){
        builder.addCase(reset, (state, actions) =>{
            return [];
        })
    }
});

export const { addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;

