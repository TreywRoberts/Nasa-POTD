import styled from 'styled-components'

export const StyledDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: white;

  .display-box{
    display: flex;
    flex-direction:column ;
    align-items: center;
    padding: 3%;
    /* justify-content: center; */
    background-color: black;
    color: white;
    width: 49%;
    
  }                                                                                                                   
    img{
      width: 40vw;
      height: 40vh;
  }
  .search{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 4%;
      background-color: black;
      width: 49%;
      padding: 3%;
      margin-top: -3%

  }
  .like{
    display: flex;
    background-color: black;
    align-items: center;
    color:white;
    transition: all 1s ease
  }
  .like p{
    font-size: 1.4rem;
  }
  .like:hover{
    color: red;
    cursor: pointer;
  }
  .liked{
    display: flex;
    background-color: black;
    align-items: center;
    color:red;
    transition: all 1s ease
  }
  .liked:hover{
    cursor: pointer;
  }
  .liked p{
    font-size: 1.4rem;
  }

  `