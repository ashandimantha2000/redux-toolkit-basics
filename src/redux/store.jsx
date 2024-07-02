import { configureStore } from "@reduxjs/toolkit";
// import numberSlice from "./numberSlice";
import dataserverSlice from "./dataserverSlice";

export const store = configureStore({
    reducer:{
        // numbers: numberSlice,
        dataserver: dataserverSlice
    }
})