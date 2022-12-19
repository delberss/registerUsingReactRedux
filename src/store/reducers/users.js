import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        signup: (state, action) => {
            return[
                ...state,
                {nome:  action.payload[0],
                email: action.payload[1],
                senha: action.payload[2]}
            ]
        }
    }
});

export const { signup} = userSlice.actions;
export default userSlice.reducer;