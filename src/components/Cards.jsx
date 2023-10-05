import React from 'react'
import watch from '../images/icons/watch-series5-logo.png'
import appleCard from '../images/icons/apple-card-logo.png'
import servant from '../images/icons/servant-logo.png'
import ipad from '../images/icons/new-ipad-logo.png'
function Cards() {
  return (
      <>
      <section class="row mt-3 ">
       <div class="watch col-12 col-md-6 p-3 mb-3">
        <img src={watch} alt=""/>
        <p>With the new Always-On Retina display.</p>
        <p>You’ve never seen a watch like this</p>
        <a href="">Learn more</a>
        <a href="">Buy</a>
       </div>

       <div class="cards col-12 col-md-6 p-3">
        <img src={appleCard} alt=""/>
        <p>Get 3% Daily Cash on purchases from Apple using Apple Card.</p>
        <a href="">Learn more</a>
        <a href="">Buy</a>
       </div>

       <div class="servant col-12 col-md-6">
        <img class="mb-5 pb-5" src={servant} alt=""/><br/>
        <a href="">watch the trailer</a>
       </div>

       <div class="airpod col-12 col-md-6 p-3">
        <h1>AirPods Pro.</h1>
        <p>Magic like you’ve never heard.</p>
        <a href="">Learn more</a>
        <a href="">Buy</a>
       </div>

       <div class="MacBook col-12 col-md-6 p-4">
        <p class="mb-0">16-inch model</p>
        <h1>MacBook Pro</h1>
        <p>The best for the brightest.</p>
        <a href="">Learn more</a>
        <a href="">Buy</a>
       </div>

       <div class="ipad col-12 col-md-6 p-4">
       <img src={ipad} alt=""/>
        <p>Magic like you’ve never heard.</p>
        <a href="">Learn more</a>
        <a href="">Buy</a>
       </div>
   </section></>
  )
}

export default Cards