import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    nome: '',
    userLogged: false
}

const loggedSlice = createSlice({
    name: 'logged',
    initialState,
    reducers: {
        login: (state, action) => {
            return(
                {
                    email: action.payload[0],
                    nome: action.payload[1],
                    userLogged: true
                }
                
            )
        },

        logout: () => {
            return(
                {
                    initialState
                }
                
            )
        }
    }
});

export const { login, logout} = loggedSlice.actions;
export default loggedSlice.reducer;