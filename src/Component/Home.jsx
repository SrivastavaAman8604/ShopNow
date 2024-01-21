import React from 'react'
import './Home.css'
import Product from '../Product.jsx';

function Home() {
  return (
    <div >
        <header className="py-5" style={{backgroundImage:`url('./assets/ecom2.jpg')`,width:'100%'}}>
            <div className="container px-4 px-lg-5 my-5" >
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With Our ecommerce Website</p>
                </div>
            </div>
        </header>
        <Product/>
    </div>
  )
}

export default Home
