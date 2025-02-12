import { createSlice } from "@reduxjs/toolkit";
import * as stages from '../../utils/constants';


const initialState = {
    stage: START_GAME,
    username: "",
}

const gameState = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
        startGame(state, action) {
            state.username = action.payload.username;
            state.stage = stages.FETCHING_GAME;
        },
    }


})

export const { } = gameState.actions;
export default gameState.reducer;