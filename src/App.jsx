import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Products from './Components/Products'

function App() {

  const [carts, setCarts] = useState([])

  const handleUpdateCart = (product) => {
      product["cart-quantity"] = product["cart-quantity"] + 1;
      console.log(product);
      setCarts(prev => [...prev, product])
  }

  console.log(carts);

  return (
    <div className='w-full flex justify-center'>
        <div className='w-[70%]'>
          <Products handleUpdateCart={handleUpdateCart}></Products>
        </div>
        <div className='w-[30%]'>
          <Card carts={carts}></Card>
        </div>
    </div>
  )
}

export default App
