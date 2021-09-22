import styled from 'styled-components'

export const StyledNav = styled.nav`
border: white 2px;
background-color: black;
display: flex;
align-items: center;
justify-content:space-around ;
margin-bottom: 3%;

    .POTD-logo{
        line-height: 50%;
    }

    h1{
        color: red;
        font-size: 3rem;
    }

    a{
        color: white;
        font-size: 2rem;
        margin-right: 3%;
        transition: ease all 1s;
        text-decoration: none;
    }

    a:hover{
        color: red;
        text-decoration: underline;
    }


    p{
        color: white;
    }

    @media(max-width:500px){
        .POTD-logo{
            line-height: 100%;
    }

            h1{
            font-size: 1.2rem;
    }
    
        a{
            font-size:1rem ;
        }

        p{
            font-size:0.8rem;
        }
        
        

    }
`