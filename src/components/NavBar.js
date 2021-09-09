import React from 'react'
import{StyledNav} from './../styles/StyledNavBar'

function Navbar(){
  
    return (
    <StyledNav>
        <h1>NASA PHOTO OF THE DAY</h1>
        <a href='/'>Home</a>
        <a href='/liked'>Liked Photos</a>  
    </StyledNav>
  );
  }

export default Navbar