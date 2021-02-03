import React, { useEffect, useState } from 'react';
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "./../../components/Header";
import Hero from "./../../Assets/icones/heroi/noun_Superhero_2227044.png";
import Card from "../../components/Card";
import Heart from "./../../Assets/icones/heart/Path Copy 7.svg";
import HeartEmpty from "./../../Assets/icones/heart/Path Copy 2@1,5x.svg";
import Loader from "./../../components/Loader";
import * as HeroesActions from "./../../store/ducks/Heroes/actions";

import compare from "./../../utils/orderByName";

import { Container, ContainerContent } from './styles';

function Home() {
  const [toggle, setToggle] = useState(false);
  const [iconHeart, setIconHeart] = useState(false);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const favorites = useSelector((state) => state.Favorites);
  const favoritesOrderned = useSelector((state) => state.Favorites.slice().sort(compare));
  const heroes = useSelector(state => state.Heroes);
  const heroesOrderned = useSelector(state => state.Heroes.data.slice().sort(compare)
  );
  const searchHeroes = useSelector(state => state.Search);
  const searchHeroesOrderned = useSelector(state => state.Search.data.slice().sort(compare));

  const handleScroll = (event) => {
    if (searchHeroes.searchValue !== "") return;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;

    const body = document.body;
    const html = document.documentElement;

    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if ((windowBottom + 200) >= docHeight && !toggleFavorite) {
      if (!heroes.loading) {
        setOffset(result => result + limit);
      }
    }
  }

  const dispatch = useDispatch();

  const handleLoadHeroes = (offset, limit, orderBy) => {
    dispatch(HeroesActions.loadHeroesRequest(offset, limit, orderBy));
  };

  useEffect(() => {
    handleLoadHeroes(offset, limit, '-modified');
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const [myData, setMyData] = useState([]);
  useEffect(() => {
    switch (true) {
      case (searchHeroes.searchValue !== "" && !toggleFavorite):
        setMyData(searchHeroes.data)
        break;
      // case (searchHeroes.searchValue !== "" && !toggleFavorite && toggle):
      //   setMyData(searchHeroesOrderned)
      //   break;

      case (!toggleFavorite && !toggle):
        setMyData(heroes.data)
        break;

      case (!toggleFavorite && toggle):
        setMyData(heroesOrderned);
        break;

      case (toggleFavorite && !toggle):
        setMyData(favorites);
        break;

      case (toggleFavorite && toggle):
        setMyData(favoritesOrderned);
        break;
      default:
        setMyData([]);
        break;
    }
  }, [toggleFavorite, toggle, heroes, favorites, favoritesOrderned, searchHeroes.data]);

  return (
    <Container>
      <>
        <Header />
        <ContainerContent toggle={toggle} toggleFavorite={toggleFavorite}>
          <div className="header">
            <div>
              <p className="p-top">Encontrados {myData.length} heróis</p>
            </div>

            <div className="content-top">
              <img src={Hero} alt="icone heroi" />
              <p>Ordernar por nome - A/Z</p>
              <Switch className="switcher" onClick={
                () => {
                  setToggle(!toggle);
                }
              } />

              <div onClick={
                () => {
                  setToggleFavorite(!toggleFavorite)
                  setIconHeart(!iconHeart)
                }
              } className="'pointer'">
                {!iconHeart &&
                  <img src={HeartEmpty} alt="icone coração" />
                }
                {iconHeart &&
                  <img src={Heart} alt="icone coração" />
                }
              </div>
              <p>Somente favoritos</p>

            </div>
          </div>

          <Card heroes={myData} />

          <div className="center">
            {(!toggleFavorite && (heroes.loading || searchHeroes.loading)) &&
              <Loader />
            }
          </div>

          <br />
        </ContainerContent>
      </>

    </Container >
  );
}

export default Home;