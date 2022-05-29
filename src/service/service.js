const productsUrl = 'https://api.npoint.io/ef9a59eff3a8c3bdb39c';
const pricingUrl = 'https://api.npoint.io/d0c98f8a62750f291114';

class Service {
    getProducts = async () => {
        const response = await fetch(productsUrl);
    
        return await response.json();
    };

    getPricing = async () => {
        const response = await fetch(pricingUrl);
    
        return await response.json();
    };
}

export default Service;