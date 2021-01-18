import React, { useEffect, useState } from 'react';
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Header from "./../../components/Header";
import Hero from "./../../Assets/icones/heroi/noun_Superhero_2227044.png";
import Heart from "./../../Assets/icones/heart/Path Copy 7.svg";

import * as HeroesActions from "./../../store/ducks/Heroes/actions";

import HeartIcon from "./../../components/HeartIcon";
import { Container, ContainerContent, ContainerBody, ButtonLoadMore } from './styles';

function Home() {
  const [toggle, setToggle] = useState(false);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const heroes = useSelector(state => state.Heroes);
  const favorites = useSelector(state => state.Favorite);
  const dispatch = useDispatch();
  const handleLoadHeroes = (offset, limit, orderBy) => {
    dispatch(HeroesActions.loadHeroesRequest(offset, limit, orderBy));
    setOffset(offset + limit);
  };


  useEffect(() => {
    handleLoadHeroes(offset, limit, 'name');
    console.log("state, ", heroes);
    console.log("favorites, ", favorites);
  }, []);
  return (
    <Container>
      <Header />
      <ContainerContent toggle={toggle}>
        <div className="header">
          <div>
            <p className="p-top">Encontrados {offset} heróis</p>
          </div>

          <div className="content-top">
            <img src={Hero} alt="icone heroi" />
            <p>Ordernar por nome - A/Z</p>
            <Switch className="switcher" onClick={
              () => {
                setToggle(!toggle)
              }
            } />
            <img src={Heart} alt="icone coração" />
            <p>Somente favoritos</p>

          </div>
        </div>


        <ContainerBody>

          {heroes.map((heroes, index) => (
            <div className="card" key={index}>
              <img src={`${heroes.thumbnail.path}/landscape_amazing.${heroes.thumbnail.extension}`} alt="teste" className="border" />
              <div>
                <p>{heroes.name}</p>
                <HeartIcon heroe={heroes} />
              </div>
            </div>
          )
          )}
        </ContainerBody>
        <ButtonLoadMore onClick={() => {
          handleLoadHeroes(offset, limit, 'name');
        }}>Carregar mais...</ButtonLoadMore>
        <br />
      </ContainerContent>
    </Container >
  );
}

export default Home;