import { configureStore } from "@reduxjs/toolkit";
import SelectedProductsSlice from "./SelectedProducts/SelectedProductsSlice";

const store = configureStore({
    reducer: {
        SelectedProductsSlice
    },
})

export default store;