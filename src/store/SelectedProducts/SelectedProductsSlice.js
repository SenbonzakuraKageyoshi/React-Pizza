import { createSlice } from "@reduxjs/toolkit";
import { updateProducts, getSelectedProducts } from "./SelectedProductsActions";

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
        }
    }
})

export const {addProduct, setProducts} = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;