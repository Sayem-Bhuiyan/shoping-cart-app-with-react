import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from "./SingleProduct"

function App() {

  const[products, setProducts]  = useState([])

  useEffect( () => {
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  console.log(products)

  return (
    <>
      <div className="main-container">
          <div className="cards-container">
            {
             products.map(pd => <SingleProduct product={pd} key={pd.id} />)
            }
            
          </div>
          <div className="cart-container">
            <h1>This is cart</h1>
          </div>
      </div>
    </>
  )
}

export default App
