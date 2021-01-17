import React, { useEffect, useState } from 'react';
import { Switch } from "antd";
// import { useDispatch, useSelector } from "react-redux";

import api from "./../../services/api";
import Header from "./../../components/Header";
import Hero from "./../../Assets/icones/heroi/noun_Superhero_2227044.png";
import Heart from "./../../Assets/icones/heart/Path Copy 7.svg";
import Heart2 from "./../../Assets/icones/heart/Path Copy 2@1,5x.svg";

// import * as HeroesActions from "./../../store/ducks/Heroes/actions.js";

import { Container, ContainerContent, ContainerBody } from './styles';

function Home() {
  // const dispatch = useDispatch();
  // const handleLoadHeroes = () => {
  //   dispatch(HeroesActions.loadHeroes());
  // };
  const [heros, setHeros] = useState([]);
  function getData() {
    api.get(`http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=50`)
      .then(async function (response) {
        const { data: { data: { results: myData } } } = response;
        setHeros(myData);
        console.log(myData)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  useEffect(() => {
    // handleLoadHeroes();
    getData();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Header />
      <ContainerContent toggle={toggle}>
        <div className="header">
          <div>
            <p className="p-top">Encontrados 20 heróis</p>
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

          {heros.map((hero) => (
            <div className="card">
              <img src={`${hero.thumbnail.path}/landscape_amazing.${hero.thumbnail.extension}`} alt="teste" className="border" />
              <div>
                <p>{hero.name}</p>
                <img src={Heart2} alt="icone coração" />
              </div>
            </div>
          )
          )}
        </ContainerBody>
      </ContainerContent>
    </Container>
  );
}

export default Home;