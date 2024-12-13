import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>

      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          {/* <div class="navbar-brand nav-item" >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </div> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <div class="nav-link active" aria-current="page" >
                  <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>

                </div>
              </li>

              <li class="nav-item">
                <div class="nav-link active" aria-current="page" >
                  <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>Projects</Link>

                </div>
              </li>

              <li class="nav-item">
                <div class="nav-link active" aria-current="page" >
                  <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}> About</Link>

                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link active" aria-current="page" >
                  <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Skills</Link>

                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link active" aria-current="page" >
                  <Link to="/contact" style={{ textDecoration: 'none' ,color: 'white' }}>Contact Me</Link>
                  
                </div>
              </li>



            </ul>
            {/* <form class="d-flex nav-item" >
        <input class="form-control me-2" type="search" placeholder="Search product" aria-label="Search"
      //  value={searchInput}
        // onChange={(e)=>{setSearchInput(e.target.value)}}
        />
        <button class="btn btn-outline-success" type="submit"
        >Search </button>
      </form> */}

          </div>
        </div>
      </nav>


    </div>
  )
}

export default Header