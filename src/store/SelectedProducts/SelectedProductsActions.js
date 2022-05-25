import { current } from "@reduxjs/toolkit";

const getSelectedProducts = () => {
    return JSON.parse(localStorage.getItem('selectedProducts'));
}

const updateProducts = (state, payload) => {
    localStorage.setItem('selectedProducts', JSON.stringify([...state, payload.payload]));
    return [...state, payload.payload]
}

const addPriceAndNumber = (id) => {
    // const idx = state.findIndex((item) => item.id === id)
    // console.log(current(state[idx]));
    // current(state[idx]).number++
    // return [...state] ?????????????????????????????????????????????
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    const idx = arr.findIndex((item) => item.id === id)
    arr[idx].number++;
    localStorage.setItem('selectedProducts', JSON.stringify([...arr]))
    return [...arr]
}

export {
    getSelectedProducts,
    updateProducts,
    addPriceAndNumber
}