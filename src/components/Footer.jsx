import React from 'react'
import flag from '../images/icons/16.png'
function Footer() {
  return (
    <section class=" foot container pt-4">
    <p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. <a href="">Full terms apply.</a> </p>
    <hr/>
    <section class="row footnav">
        <div class=" col-lg-3 col-md-6">

        <ul class="shop">
           <a id="sl" href=""><p>Shop and Learn</p></a>
            <li ><a href="">Mac</a></li>
            <li ><a href="">iphone</a></li>
            <li ><a href="">ipad</a></li>
            <li ><a href="">watch</a></li>
            <li ><a href="">tv</a></li>
            <li ><a href="">music</a></li>
            <li ><a href="">AirPods</a></li>
            <li ><a href="">Homepods</a></li>
            <li ><a href="">ipod touch</a></li>
            <li ><a href="">accessories</a></li>
            <li ><a href="">Gift cards</a></li>
        </ul>
        </div>

        <div class=" col-lg-3 col-md-6">
            
        <ul class="Services">
            <a href=""><p id="ser">Services</p></a>
            <li id="Services"><a href="">Apple Music</a></li>
            <li id="Services"><a href="">Apple News+</a></li>
            <li id="Services"><a href="">Apple TV+</a></li>
            <li id="Services"><a href="">Apple Arcade</a></li>
            <li id="Services"><a href="">Apple Card</a></li>
            <li id="Services"><a href="">iCloud</a></li>
            <li id="Services"><a href="">Manage Your Apple ID</a></li>
            <li id="Services"><a href="">Apple Store Account</a></li>
            <li id="Services"><a href="">iCloud.com</a></li>
        </ul>
        </div>

        <div class="col-lg-3 col-md-6">
        <ul class="Apple_Store">
            <a href=""><p id="as">Apple Store</p></a>
            <li id="Apple_Store"><a href="">Find a Store</a></li>
            <li id="Apple_Store"><a href="">Genius Bar</a></li>
            <li id="Apple_Store"><a href="">Today at Apple</a></li>
            <li id="Apple_Store"><a href="">Apple Camp</a></li>
            <li id="Apple_Store"><a href="">Field Trip</a></li>
            <li id="Apple_Store"><a href="">Apple Store App</a></li>
            <li id="Apple_Store"><a href="">Refurbished and Clearance</a></li>
            <li id="Apple_Store"><a href="">Financing</a></li>
            <li id="Apple_Store"><a href="">Apple Trade In</a></li>
            <li id="Apple_Store"><a href="">Order Status</a></li>
            <li id="Apple_Store"><a href="">Shopping Help</a></li>
        </ul>
        </div>

         <div class="col-lg-3 col-md-6">
    <ul class="val">
        <a href=""><p id="av">Apple values</p></a>
        <li id="val"><a href="">Find a Store</a></li>
        <li id="val"><a href="">Genius Bar</a></li>
        <li id="val"><a href="">Today at Apple</a></li>
        <li id="val"><a href="">Apple Camp</a></li>
        <li id="val"><a href="">Field Trip</a></li>
        <li id="val"><a href="">Apple Store App</a></li>
        <li id="val"><a href="">Find a Store</a></li>
        <li id="val"><a href="">Genius Bar</a></li>
        <li id="val"><a href="">Today at Apple</a></li>
        <li id="val"><a href="">Apple Camp</a></li>
        <li id="val"><a href="">Field Trip</a></li>
        <li id="val"><a href="">Apple Store App</a></li>
    </ul>
        </div>
    </section>
        <p>More ways to shop: <a href="">Find an Apple Store</a> or <a href="">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
    <hr/>
   <div class="row"><p class="col-4"> Copyright © 2019 Apple Inc. All rights reserved.</p>
<div class="col-5">
    <a href="">Privacy Policy</a>|
    <a href="">Terms of Use</a>|
    <a href="">Sales and Refunds</a>|
    <a href="">Legal</a>|
    <a href="">Site Map</a></div>
    <div class="last col-3">
        <img src={flag} alt=""/> 
        <p>United States</p>
    </div>
</div>

    
   </section>
  )
}

export default Footer