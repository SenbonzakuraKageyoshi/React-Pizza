import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const selectedProductsSlice = createSlice({
    name: 'selectedProducts',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log(1)
            return [...state, action.payload];
        }
    }
})

export const {addProduct} = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;