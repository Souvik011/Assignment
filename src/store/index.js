import { configureStore } from "@reduxjs/toolkit";
import ActionSlice from "./ActionSlice";

const store = configureStore({
    reducer:{action:ActionSlice}
});

export default store;