import React from 'react'
import{StyledNav} from './../styles/StyledNavBar'

function Navbar(){
  
    return (
    <StyledNav>
        <div className='POTD-logo'>
            <h1>NASA PHOTO OF THE DAY</h1>
            <p>Brought to you by NASA's Astronomy Photo of the Day API</p>
        </div>
        <a href='/'>Home</a>
        <a href='/liked'>Liked Photos</a>  
    </StyledNav>
  );
  }

export default Navbar