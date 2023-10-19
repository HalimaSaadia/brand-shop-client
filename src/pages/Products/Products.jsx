import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import ProductsPageSlider from '../../components/ProductsPageSlider/ProductsPageSlider';

const Products = () => {
    return (
        <div>
              <ProductsPageSlider />
            <ProductsContainer />
          
        </div>
    );
};

export default Products;