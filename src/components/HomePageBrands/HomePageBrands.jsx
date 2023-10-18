import React, { useEffect, useState } from 'react';
import HomePageBrand from '../HomePageBrand/HomePageBrand';

const HomePageBrands = () => {
    const [brands, setBrands] = useState([])

    useEffect(()=> {
        fetch('brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div className='my-10 '>
            <h1 className="text-4xl text-center my-10 text-[#2B3440] font-bold py-3">Buy Products Of your Favorite Brand</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {brands.map(brand => <HomePageBrand key={brand.Id} brand={brand}/>)}
            </div>
           
        </div>
    );
};

export default HomePageBrands;