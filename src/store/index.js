import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/users';
import loggedSlice from './reducers/logged'

const store = configureStore({
    reducer: {
        users: userSlice,
        logged: loggedSlice,
    }
})

export default store;