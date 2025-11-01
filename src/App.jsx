import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Products from './Components/Products'

function App() {

  const [carts, setCarts] = useState([])

  const handleUpdateCart = (product) => {
      setCarts((prev) => {
          const exists = prev.some(p => p.id === product.id); 

          if(exists){
            return prev.map((prod) => prod.id === product.id ? {...prod, cartQuantity: prod.cartQuantity + 1 } : prod)
          }
          else{
            return [...prev, {...product, cartQuantity: 1}]
          }
      })
  }

  console.log(carts);

  return (
    <div className='w-full flex justify-center m-10'>
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
