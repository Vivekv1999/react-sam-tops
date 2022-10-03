import React from 'react'
import styles from './xyz.module.css'

// internal css 
const mystyle={
  backgroundColor:"green",

}

export default function Header() {
  return (

    <nav className={`navbar navbar-expand-lg xyzzz ${styles.xyzzz}`} >   
    {/* // <nav className="navbar navbar-expand-lg xyzzz" style={mystyle}>                //internal css    */}
    {/* <nav className="navbar navbar-expand-lg" style={{backgroundColor:'yellow'}}>      ///inline css */}
    <a className="navbar-brand" href="#" style={{color:'white'}}>Navbar</a>
    <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:'white'}}>Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true" style={{color:'white'}}>
            Dropdown
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown"  >
            <li><a className="dropdown-item" href="#"  style={{color:'white'}}>Action</a></li>
            <li><a className="dropdown-item" href="#" style={{color:'white'}}>Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#" style={{color:'white'}}>Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" style={{color:'white'}}>Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className={`btn btn-outline-success ${styles.searchbtn}`} type="submit">Search</button>
      </form>
    </div>
</nav>  
    
  )
}
