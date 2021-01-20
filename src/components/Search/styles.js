import styled from 'styled-components';
import Lupa from './../../Assets/busca/Lupa/Shape.png';

export const Input = styled.input`
  background: url(${Lupa}) no-repeat scroll 1.5rem 1.5rem;
  padding-left:6rem;
  margin-top:4%;
  height: 4.5rem;
  width: 50%;
  border-radius: 1.5rem;
  outline: none;
  color: var(--red);
  background-color: ${props => props.color ? 'var(--pink)' : 'var(--white)'};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-size:1.3rem;
  color: var(--red);
}

@media(max-width:916px){
    width:70%;
  }
 
`;
