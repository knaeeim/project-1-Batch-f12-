import React from 'react';

const Card = ({ carts }) => {
    return (
        <div className='my-20 text-center'>
            <h1 className='text-xl font-bold'>Here is your added Products: 0</h1>
            {
                carts.map((cart) => <ul><li>{cart.name}</li></ul>)
            }
        </div>
    );
};

export default Card;