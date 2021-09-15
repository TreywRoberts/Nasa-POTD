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

  }
  .display-box h3{
      text-decoration: underline;
  }

  img{
    width: 40vw;
    height: 40vh;
  }

  .noPhoto{
      height: 100vh;
      font-size: 3rem;
  }

  
  `