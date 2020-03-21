import React from "react"
import {Link,NavLink} from "react-router-dom"

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="">Navbar</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link" to="/contact">Contact</Link>
      <Link class="nav-item nav-link" to="/about">About</Link>
    </div>
  </div>
</nav>
    )
}

export default Navbar