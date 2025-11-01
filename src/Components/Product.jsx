import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { IoBagAddOutline } from 'react-icons/io5';

const Product = ({ product, handleUpdateCart }) => {
    const {name, category, description, price, rating, image} = product;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='w-96 h-52 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-primary">{category}</div>
                        <div className="badge badge-secondary">{rating}</div>
                        <div className="badge badge-outline">$ {price}</div>
                    </div>
                    <div className='flex gap-2 w-full mt-5'>
                        <button onClick={() => handleUpdateCart(product)} className='btn btn-success btn-outline w-[50%]'> <CiShoppingCart size={25}/> Add to Cart</button>
                        <button className='btn btn-secondary btn-outline w-[50%]'> <IoBagAddOutline size={25}/> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;