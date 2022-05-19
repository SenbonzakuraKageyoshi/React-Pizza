import React, {useState, useEffect} from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import Service from '../../service/service';
import './product-list.css'

const ProductList = () => {

    // const state = useSelector((state) => state.SelectedProductsSlice)
    // console.log(state)
    // // получаю херню
    // const dispatch = useDispatch()
    

    const service = new Service();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      service.getProducts().then((res) => setProducts(res))
    }, [])

  return (
    <ul className="product__list">
        {/* <button onClick={() => dispatch(addProduct({type: 'dsofoisdfijijf', payload: {name: 'dsfuhusdihfushd'}}))}>test</button> */}
        {products.map((product) => (
            <ProductListItem key={product.id} id={product.id} productName={product.productName} productPrice={product.productPrice} productImg={product.img}/>
        ))}
    </ul>
  )
}

export default ProductList