import React from 'react'
import mac_laptop from '../images/home/mac-laptop.jpg'
function Mac_lap() {
  return (
    <> <section className="Mac container-fluid pt-4">
    <p>16-inch model</p>
    <h1 className="fw-bold">MacBook Pro</h1>
    <h2>The best for the brightest.</h2>
    <a href="">Learn more</a>
    <a href="">Buy</a><br/>
    <img src={mac_laptop} alt=""/>
   </section> 
    </>
  )
}

export default Mac_lap