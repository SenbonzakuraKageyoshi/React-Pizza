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
    payload.productPrice = payload.defaultPrice;
    saveToLocalStorage([...state, payload])
    return [...state, payload]
};

const addPriceAndNumber = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    const idx = arr.findIndex((item) => item.id === id);
    arr[idx].number++;
    arr[idx].defaultPrice = arr[idx].productPrice * arr[idx].number;
    localStorage.setItem('selectedProducts', JSON.stringify([...arr]))
    return [...arr]
};

const removePriceAndNumber = (id) => {
    const arr = JSON.parse(localStorage.getItem('selectedProducts'));
    const idx = arr.findIndex((item) => item.id === id);
    if(arr[idx].number === 1){
        return;
    };
    arr[idx].number--;
    arr[idx].defaultPrice = arr[idx].productPrice * arr[idx].number;
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