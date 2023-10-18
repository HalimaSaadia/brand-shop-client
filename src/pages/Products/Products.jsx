import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';

const Products = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <ProductsContainer />
        </div>
    );
};

export default Products;