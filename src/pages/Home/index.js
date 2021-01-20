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
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();

  const compare = (a, b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  const handleLoadHeroes = (offset, limit, orderBy) => {
    dispatch(HeroesActions.loadHeroesRequest(offset, limit, orderBy));
    setOffset(offset + limit);
  };

  const favorites = useSelector((state) => state.Favorites);
  const favoritesOrderned = useSelector((state) => state.Favorites.slice().sort(compare));
  const heroes = useSelector(state => state.Heroes);
  const heroesOrderned = useSelector(state => state.Heroes.slice().sort(compare)
  );

  useEffect(() => {
    handleLoadHeroes(offset, limit, '-modified');
  }, []);
  return (
    <Container>
      <Header />
      <ContainerContent toggle={toggle} toggleFavorite={toggleFavorite}>
        <div className="header">
          <div>
            <p className="p-top">Encontrados {offset} heróis</p>
          </div>

          <div className="content-top">
            <img src={Hero} alt="icone heroi" />
            <p>Ordernar por nome - A/Z</p>
            <Switch className="switcher" onClick={
              () => {
                setToggle(!toggle);
              }
            } />
            <img src={Heart} alt="icone coração" />
            <p>Somente favoritos</p>
            <Switch className="switcher-favorite" onClick={
              () => {
                setToggleFavorite(!toggleFavorite)
              }
            } />

          </div>
        </div>


        <ContainerBody>


          {(!toggleFavorite && !toggle) && heroes.map((heroes, index) => (
            <div className="card" key={index}>
              <img src={`${heroes.thumbnail.path}/landscape_amazing.${heroes.thumbnail.extension}`} alt="teste" className="border" />
              <div>
                <p>{heroes.name}</p>
                <HeartIcon heroe={heroes} />
              </div>
            </div>
          )
          )}
          {(!toggleFavorite && toggle) && heroesOrderned.map((heroes, index) => (
            <div className="card" key={index}>
              <img src={`${heroes.thumbnail.path}/landscape_amazing.${heroes.thumbnail.extension}`} alt="teste" className="border" />
              <div>
                <p>{heroes.name}</p>
                <HeartIcon heroe={heroes} />
              </div>
            </div>
          )
          )}
          {(toggleFavorite && !toggle) && favorites.map((heroes, index) => (
            <div className="card" key={index}>
              <img src={`${heroes.thumbnail.path}/landscape_amazing.${heroes.thumbnail.extension}`} alt="teste" className="border" />
              <div>
                <p>{heroes.name}</p>
                <HeartIcon heroe={heroes} />
              </div>
            </div>
          )
          )}
          {(toggleFavorite && toggle) && favoritesOrderned.map((heroes, index) => (
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
        {(heroes.length && !toggleFavorite) &&
          <ButtonLoadMore onClick={() => {
            handleLoadHeroes(offset, limit, '-modified');

          }}>Carregar mais...</ButtonLoadMore>

        }
        <br />
      </ContainerContent>
    </Container >
  );
}

export default Home;