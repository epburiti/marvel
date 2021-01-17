import styled from 'styled-components';

export const Container = styled.div`
margin:auto;
  width:90%;
  height:100%;
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
`;
export const ContainerContent = styled.div`
  margin-top:5%;
  width:100%;
  min-height:500px;
  .header{
    display: flex;
    justify-content: space-between;
    .p-top{
      color: var(--black2);
    }
    .switcher{
    background-color:${props => props.toggle ? 'var(--red)' : 'var(--black2)'};
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

