import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light ">
  <div className="container-fluid">
    <div className='fw-bolder ms-5'>
        <h1>BETA QUIZ</h1>
    </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      </ul>
    
      <div className='me-5 '>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className='nav-link text-light fw-bold ' to='/'>Topics</Link>
          
        </li>
        <li className="nav-item">
           <Link className='nav-link text-light fw-bold' to='/statistics'>Statistics</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link text-light fw-bold' to='/blog'>Blogs</Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
      );
};

export default Header;