import React from 'react'
import searchInputAtom from '../Recoil/searchInputAtom'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import initialProductAtom from '../Recoil/initialProductAtom';
const Header = () => {
    const[searchInput,setSearchInput]=useRecoilState(searchInputAtom)
    const [ApiData,SetApiData]=useRecoilState(initialProductAtom);
  return (
    <div className='container'>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="navbar-brand" >Carrer</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div class="nav-link active" aria-current="page" ></div>
        </li>
        
        
        <li class="nav-item">
          <div class="nav-link active" aria-current="page" >
            {/* <Link to="/register" style={{ textDecoration: 'none' }}>Sign Up</Link> */}
            Sign Up
            </div>
        </li>
        <li class="nav-item">
          <div class="nav-link active" aria-current="page" >
            {/* <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link> */}
            Login In
            </div>
        </li>
        <li><div class="dropdown-item" >Filter</div>
              <select name="" id="" className='select-item' >
                <option value="All" selected>ALL</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                
              </select>
              
              </li>
      </ul>
      <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search product" aria-label="Search"
       value={searchInput}
        // onChange={(e)=>{setSearchInput(e.target.value)}}
        />
        <button class="btn btn-outline-success" type="submit"
        >Search </button>
      </form>
      
    </div>
  </div>
</nav>
      
   
    </div>
  )
}

export default Header