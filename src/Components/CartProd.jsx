import React from 'react';

const CartProd = ({ cart }) => {
    const {name, price, image, cartQuantity} = cart;
    return (
        <div className='flex justify-between gap-5 w-[90%] mx-auto my-8 bg-slate-300 p-3 rounded-xl'>
            {/* image div */}
            <div className='h-16 w-16'>
                <img className='w-full h-full rounded-xl object-cover object-center' src={image} alt="" />
            </div>

            {/* text div */}
            <div className='space-y-4 w-[80%]'>
                <p className='font-bold text-xl text-left'>{name}</p>
                <div className='flex gap-4 w-full'>
                    <p className='font-bold text-green-800'>Price : {price * cartQuantity}</p>
                    <p className='font-bold text-blue-600'>Quantity: {cartQuantity}</p>
                </div>
            </div>
        </div>
    );
};

export default CartProd;