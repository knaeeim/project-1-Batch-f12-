import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ handleUpdateCart }) => {

    // /knaeeim

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(data => data.json())
        .then((res) => setProducts(res))
    }, [])

    // console.log(products);


    return (
        <div className='grid grid-cols-3 justify-items-center my-20 gap-y-10'>
            {
                products.map((product) => <Product handleUpdateCart={handleUpdateCart} key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;