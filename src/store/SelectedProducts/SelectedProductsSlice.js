import { createSlice } from "@reduxjs/toolkit";
import { updateProducts, getSelectedProducts, addPriceAndNumber } from "./SelectedProductsActions";

const initialState = [];

const selectedProductsSlice = createSlice({
    name: 'selectedProducts',
    initialState,
    reducers: {
        setProducts: () => {
            return getSelectedProducts();
        },
        addProduct: (state, action) => {
            return updateProducts(state, action);
        },
        addNumber: (state, action) => {
            return addPriceAndNumber(state, action.payload)
        }
    }
})

export const {addProduct, setProducts, addNumber} = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;