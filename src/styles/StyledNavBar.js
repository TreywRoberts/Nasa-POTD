import styled from 'styled-components'

export const StyledNav = styled.nav`
background-color: black;
display: flex;
align-items: center;
justify-content:space-between ;
margin-bottom: 3%;

    h1{
        color: red;
    }

    a{
        color: white;
        font-size: 2rem;
        margin-right: 3%;
        transition: ease all 1s;
    }
    
    a:hover{
        color: red;
    }

    p{
        color: white;
    }
`