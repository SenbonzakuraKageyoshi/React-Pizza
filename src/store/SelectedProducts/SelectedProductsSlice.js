import { createSlice } from "@reduxjs/toolkit";
import { updateProducts, getSelectedProducts, addPriceAndNumber, removePriceAndNumber, removeProduct, removeSelectedProducts } from "./SelectedProductsActions";

const initialState = [];

const selectedProductsSlice = createSlice({
    name: 'selectedProducts',
    initialState,
    reducers: {
        setProducts: () => {
            return getSelectedProducts();
        },
        addProduct: (state, action) => {
            return updateProducts(state, action.payload);
        },
        addNumber: (state, action) => {
            return addPriceAndNumber(action.payload)
        },
        removeNumber: (state, action) => {
            return removePriceAndNumber(action.payload)
        },
        deleteProduct: (state, action) => {
            return removeProduct(action.payload);
        },
        clearCart: () => {
            return removeSelectedProducts();
        }
    }
})

export const {addProduct, setProducts, addNumber, removeNumber, deleteProduct, clearCart} = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;