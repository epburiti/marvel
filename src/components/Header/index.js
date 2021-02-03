import React from 'react';

import { Container } from './styles';

import Search from "./../Search";

import Logo from "./../../Assets/logo/Group.png";
import Logo1 from "./../../Assets/logo/Group@1,5x.svg";
import Logo2 from "./../../Assets/logo/Group@2x.png";
import Logo3 from "./../../Assets/logo/Group@3x.png";

function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo Marvel" srcSet={`
      ${Logo1}, 
      ${Logo2},
      ${Logo3},
  `} />
      <h1>Explore o Universo</h1>
      <p>Mergulhe No Dominio Deslumbrante de todos de todos os personagens clássicos que voce ama - e aqueles que você descobrira em breve</p>

      <Search color={1} />
    </Container>
  );
}

export default Header;