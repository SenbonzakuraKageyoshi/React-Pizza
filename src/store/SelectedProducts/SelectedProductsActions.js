const getSelectedProducts = () => {
    return JSON.parse(localStorage.getItem('selectedProducts'));
};

const updateProducts = (state, payload) => {
    localStorage.setItem('selectedProducts', JSON.stringify([...state, payload.payload]));
    return [...state, payload.payload]
};

const addPriceAndNumber = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    arr[arr.findIndex((item) => item.id === id)].number++;
    arr[arr.findIndex((item) => item.id === id)].productPrice += arr[arr.findIndex((item) => item.id === id)].defaultPrice;
    localStorage.setItem('selectedProducts', JSON.stringify([...arr]))
    return [...arr]
};

const removePriceAndNumber = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    arr[arr.findIndex((item) => item.id === id)].number--;
    arr[arr.findIndex((item) => item.id === id)].productPrice -= arr[arr.findIndex((item) => item.id === id)].defaultPrice;
    localStorage.setItem('selectedProducts', JSON.stringify([...arr]))
    return [...arr]
};

const removeProduct = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    const result = [...arr.filter((item) => item.id !== id)];
    localStorage.setItem('selectedProducts', JSON.stringify(result))
    return result;
};

const removeSelectedProducts = () => {
    localStorage.setItem('selectedProducts', JSON.stringify([]))
    return [];
}

export {
    getSelectedProducts,
    updateProducts,
    addPriceAndNumber,
    removePriceAndNumber,
    removeProduct,
    removeSelectedProducts
}