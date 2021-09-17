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
    background-color: black;
    color: white;
    width: 49%;
    h2{
        font-size: 2.5rem;
    };
    h3{
        font-size: 2rem;
    }
  }
    p{
        font-size:1.5rem;
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

  .search{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 4%;
      background-color: black;
      width: 49%;
      padding: 3%;
      margin-top: -3%;
      h4{
        font-size: 2rem;
      }
      input{
          font-size: 2rem;
      }
      button{
          height: 2.7rem;
          margin-top: 2%;
          font-size: 1.5rem;
          font-weight: bolder;
          border: none;
          transition: ease all 1s;
      }
      button:hover{
          background: red;
      }
  }
  form{
      display: flex;
      flex-direction: column;
  }

  .like{
    display: flex;
    background-color: black;
    align-items: center;
    color:white;
    transition: all 1s ease;
    p{
        font-size: 2rem;

    }
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
    transition: all 1s ease;
    p{
        font-size: 2rem;
    }
  }

  .liked:hover{
    cursor: pointer;
  }
  `