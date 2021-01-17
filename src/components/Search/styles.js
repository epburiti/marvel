import styled from 'styled-components';
import Lupa from './../../Assets/busca/Lupa/Shape.png';

export const Input = styled.input`
background: url(${Lupa}) no-repeat scroll 0.8rem 0.8rem;
padding-left:3rem;
margin-top:4%;
 height: 3rem;
    width: 60%;
    border-radius: 1.5rem;
    outline: none;
    color: var(--red);
  background-color: ${props => props.color ? 'var(--pink)' : 'var(--white)'};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--red);
}
 
`;
