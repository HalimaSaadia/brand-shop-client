import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductsContainer = () => {

const [products, setProducts] = useState([])
const brand = useParams().brand


useEffect(()=> {
    fetch(`http://localhost:5000/products/${brand}`)
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
console.log(products)
    return (
        <div className='my-10'>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map(product => <Product key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default ProductsContainer;