import styled from 'styled-components';
export const Container = styled.div`
min-height:100vh;
  background-color: var(--green);

  .content{
    width:90%;
    margin:0 auto;
    position: relative;
  }
  .fundo {
    padding-top:35rem;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    p{
    text-transform: uppercase;
    color: var(--white);
    font-size: 38rem;
    font-weight: 900;
  }
  }
  
  .main{
    margin-top:10rem;
    .left{
      width:30%;

      .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h5{
          text-transform: uppercase;
          font-weight: bold;
          font-size: 3rem;
          color:var(--black1);
          margin: 0;

        }
       
      }
      .desc{
          text-align: justify;
          color:var(--black2);
        }
    
        .card-footer{
          display: flex;
          justify-content: space-between;
          .card{
            height: 7rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
            color: var(--black1);
            font-weight: 700;
            font-size: 1.4rem;
          }
          span{
            margin-left:1rem;
          }
        }
      
        }
    }
  }
`;
export const Header = styled.div`
  padding-top: 4rem;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  img{
    margin: 0 10%;
    width: 20rem;
    height: 9rem;
  }
  .search{
    height:100%;
    width:100%;

    *{
    margin: 0 !important;

    }
  }
`;
