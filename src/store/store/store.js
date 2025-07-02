import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "../reducers/expenseSlice";
import authSlice from "../reducers/authSlice";
import premiumSlice from "../reducers/premiumSlice";
import { composeWithDevTools } from '@redux-devtools/extension';
const store = configureStore({
    reducer: {
        expenses: expenseSlice,
        auth: authSlice,
        premium: premiumSlice
    }
}, composeWithDevTools() )

export default store
