import React from 'react'
import logo from '../images/icons/logo.png'
import search from '../images/icons/search-icon.png'
import cart from '../images/icons/cart.png'
function Header() {
  return (
    <> <header class="navbar container-fluid">
    <ul class="">  
        <a id="yes" href=""><img src={logo} alt=""/></a>
        <li><a href="">Mac</a></li>
        <li><a href="">iphone</a></li>
        <li><a href="">ipad</a></li>
        <li><a href="">watch</a></li>
        <li><a href="">tv</a></li>
        <li><a href="">music</a></li>
        <li><a href="">Support</a></li>
        <a class="no" href=""><img src={search} alt=""/></a>
        <a class="no" href=""><img src={cart} alt=""/></a>
    </ul>
    </header>
    <div class="navlink container-fluid">
    <li id="navlink"><a href="">Mac</a></li>
    <li id="navlink"><a href="">iphone</a></li>
    <li id="navlink"><a href="">ipad</a></li>
    <li id="navlink"><a href="">watch</a></li>
    <li id="navlink"><a href="">tv</a></li>
    <li id="navlink"><a href="">music</a></li>
    <li id="navlink"><a href="">Support</a></li>
   </div></>
  )
}

export default Header