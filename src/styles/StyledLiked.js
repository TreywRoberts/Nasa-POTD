import styled from 'styled-components'

export const StyledLiked = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items:center;
  color: white;

  .display-box{
    display: flex;
    flex-direction:column ;
    align-items: center;
    padding: 3%;
    background-color: black;
    color: white;
    width: 49%;
    margin-bottom: 3%;
    h2{
        font-size: 2.5rem; 
    }
    h3{
        text-decoration: underline;
        font-size: 2rem;
    }
    p{
        font-size:1.5rem;
  }
  }

  img{
    width: 40vw;
    height: 40vh;
  }

  iframe{
    width: 40vw;
    height: 40vh;
    border: none;
  }

  button{
      width: 10vw;
      height: 5vh;
      margin-bottom:10%;
      background-color: white;
      font-size: 1.5rem;
      font-weight: bolder;
      border: none;
      transition: all ease 1s;
  }

  button:hover{
      background: red;
  }

  .noPhoto{
      height: 100vh;
      font-size: 3rem;
  }  

  @media(max-width:500px){
      button{
          width:100%
      }
  }
  `