import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const movesSlice = createSlice({
    name:"movie",
    initialState: [],
    reducers:{
        addMovie(state, actions){
            state.push(actions.payload);
        },
        removeMovie(state, actions){
            const index = state.indexOf(actions.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder){
        builder.addCase(reset, (state, actions)=>{
            return [];
        });
    }

});

export const { addMovie, removeMovie } = movesSlice.actions;
export const moviesReducer = movesSlice.reducer;