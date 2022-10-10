import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div className='fw-bolder ms-5'>
        <h1>BETA QUIZ</h1>
    </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     
      </ul>
    
      <div className='me-5'>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link className='nav-link' to='/'>Topics</Link>
          
        </li>
        <li class="nav-item">
           <Link className='nav-link' to='/statistics'>Statistics</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/blog'>Blogs</Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
      );
};

export default Header;