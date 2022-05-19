const url = 'https://api.npoint.io/ef9a59eff3a8c3bdb39c';

class Service {
    getProducts = async () => {
        const response = await fetch(url);
    
        return await response.json();
    }
}

export default Service;