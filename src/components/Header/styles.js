import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  width:90%;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  h1{
    text-transform:uppercase;
    font-weight:bold;
    color: var(--black1);
    font-size: 2.8rem;
  }
  p{
  color: var(--black2);
  font-size: 1.6rem;
  }
`;
