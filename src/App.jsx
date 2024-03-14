import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from "./SingleProduct.jsx"

function App() {

  const[products, setProducts]  = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  
  const handleCart = (p) => {
    const isExist = cart.find(pd =>  pd.id === p.id)
    if(!isExist){
      const newCart = [...cart, p]
      setCart(newCart)
    }
    else{
      alert('already added in cart')
    }
  }
  console.log(cart)
  return (
    <>
      <div className="main-container">
          <div className="cards-container">
            {
             products.map(pd => <SingleProduct product={pd} key={pd.id} handleCart ={handleCart} />)
            }
            
          </div>
          <div className="cart-container">
            <h2>This is cart</h2>
            <div className="cart-title">
              <h3>Name</h3>
              <h3>Price</h3>
            </div>
            <div>
              {cart.map((item, index) => (
                  <div key={item.id} className='cart-title'>
                    <p>{index + 1}</p>
                    <h3>{item.title.slice(0, 10)}</h3>
                    <h3>{item.price}</h3>
                  </div>
                ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default App
