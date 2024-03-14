import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const[products, setProducts]  = useState([])

  useEffect( () => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <>
      <div className="main-container">
          <div className="cards-container">
            <div className="card">
              <img className='card-img' src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
              <h1>Test Test</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, enim laudantium sed voluptatem natus maxime!</p>
              <div className="card-footer">
                <h1>520 $</h1>
                <button className='add-btn'>Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="cart-container">
            <h1>This is cart</h1>
          </div>
      </div>
    </>
  )
}

export default App
