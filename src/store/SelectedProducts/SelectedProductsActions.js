const getSelectedProducts = () => {
    return JSON.parse(localStorage.getItem('selectedProducts'));
}

const updateProducts = (state, payload) => {
    localStorage.setItem('selectedProducts', JSON.stringify([...state, payload.payload]));
    return [...state, payload.payload]
}

export {
    getSelectedProducts,
    updateProducts
}