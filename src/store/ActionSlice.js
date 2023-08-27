import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

const ActionSlice = createSlice({
    name:"action",
    initialState:initialState,
    reducers:{
        addItem (state,action) {
            state.items = action.payload;
        }
    }
});

export const Action = ActionSlice.actions;
export default ActionSlice.reducer;