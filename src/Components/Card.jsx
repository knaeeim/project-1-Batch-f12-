import React, { useEffect, useState } from 'react';
import CartProd from './CartProd';

const Card = ({ carts }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const tPrice = carts.reduce((acc, curr) => (
            acc += curr.cartQuantity * curr.price
        ), 0)
        setTotalPrice(tPrice);
    }, [carts])

    return (
        <div className='my-20 text-center p-5'>
            <h1 className='text-xl font-bold'>Here is your added Products: {carts.length}</h1>
            <ul className='mt-10'>
                {
                    carts.map((cart) => <CartProd key={cart.id} cart={cart}></CartProd>)
                }
            </ul>
            <hr />
            <div className='flex justify-between p-5'>
                <p className='font-bold text-2xl text-green-500'>Total Price : </p> <p className='font-bold text-2xl text-green-500'>${totalPrice}</p>
            </div>
        </div>
    );
};

export default Card;