const productsUrl = 'https://api.npoint.io/ef9a59eff3a8c3bdb39c';

class Service {
    getProducts = async () => {
        const response = await fetch(productsUrl);
        
        if(!response.ok){
            return null;
        }

        return await response.json();
    };
}

export default Service;