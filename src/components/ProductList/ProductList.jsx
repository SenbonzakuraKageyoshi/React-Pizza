import React, {useState, useEffect} from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import Service from '../../service/service';
import './product-list.css'

const ProductList = () => {
  
    const service = new Service();

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      service.getProducts().then((res) => setProducts(res))
    }, [])

  return (
    <ul className="product__list">
        {products.map((product) => (
            <ProductListItem products={products} types={product.types} sizes={product.sizes} setProducts={setProducts} key={product.id} id={product.id} defaultPrice={product.defaultPrice} productName={product.productName} productPrice={product.productPrice} productImg={product.img}/>
        ))}
    </ul>
  )
}

export default ProductList