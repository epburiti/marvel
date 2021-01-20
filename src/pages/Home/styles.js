import styled from 'styled-components';

export const Container = styled.div`
margin:auto;
  width:90%;
`;
export const ButtonLoadMore = styled.div`
      background-color: var(--red);
      height:50px;
      width:200px;
      color:var(--white);
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px auto;
      font-weight: bold;
      cursor:pointer;
`;
export const ContainerBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  .card{
    margin:30px 10px;
    max-width: 250px;
    .border{
      border-bottom: 2px solid var(--red);
    }
    div{
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      p{
        margin: 0px;
        color: var(--black1);
        font-weight:bold;
      }
    }
   
  }

  @media(max-width:916px){
    justify-content: space-around;
  .header{
    margin-top:50px;
  }
  }
`;
export const ContainerContent = styled.div`
  margin-top:5%;
  width:100%;
  min-height:500px;
  .header{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top:20px;
    .p-top{
      color: var(--black2);
    }
    .switcher{
    background-color:${props => props.toggle ? 'var(--red)' : 'var(--black2)'};
  }
    .switcher-favorite{
    background-color:${props => props.toggleFavorite ? 'var(--red)' : 'var(--black2)'};
  }
  .content-top{
      display:flex;
      color: var(--red);
      align-items: center;
    }
  }

  p{
    margin: 0 1rem;

  }
  button{
    margin: 0 1rem;
  }

`;

