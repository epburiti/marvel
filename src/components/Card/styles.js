import styled from 'styled-components';

export const ContainerBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;

  /* hover */
  .zoom img {
    transform-origin: 50% 65%;
  transition: transform 2s, filter 3s ease-in-out;
  filter: brightness(150%);
}

/* The Transformation */
.zoom:hover img {
  filter: brightness(100%);
  transform: scale(1.1);
}
/* end hover */
  .card{
    overflow: hidden; 
    cursor:pointer;
    margin:30px 10px;
    /* max-width: 250px; */
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
