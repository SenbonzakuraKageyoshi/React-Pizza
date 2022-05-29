const saveToLocalStorage = (item) => {
    localStorage.setItem('selectedProducts', JSON.stringify(item))
}

const getSelectedProducts = () => {
    if(JSON.parse(localStorage.getItem('selectedProducts'))){
        return JSON.parse(localStorage.getItem('selectedProducts'));
    }else{
        return [];
    }
};

const updateProducts = (state, payload) => {
    saveToLocalStorage([...state, payload.payload])
    return [...state, payload.payload]
};

const addPriceAndNumber = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    arr[arr.findIndex((item) => item.id === id)].number++;
    arr[arr.findIndex((item) => item.id === id)].defaultPrice = arr[arr.findIndex((item) => item.id === id)].defaultPrice + arr[arr.findIndex((item) => item.id === id)].defaultPrice;
    localStorage.setItem('selectedProducts', JSON.stringify([...arr]))
    return [...arr]
};

const removePriceAndNumber = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    arr[arr.findIndex((item) => item.id === id)].number--;
    arr[arr.findIndex((item) => item.id === id)].defaultPrice = arr[arr.findIndex((item) => item.id === id)].defaultPrice - arr[arr.findIndex((item) => item.id === id)].defaultPrice;
    saveToLocalStorage([...arr])
    return [...arr]
};

const removeProduct = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    const result = [...arr.filter((item) => item.id !== id)];
    saveToLocalStorage(result)
    return result;
};

const removeSelectedProducts = () => {
    saveToLocalStorage([])
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