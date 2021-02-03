import React from 'react';

import { Container, Header } from './styles';
import Logo from "./../../Assets/logo/Group.png";
import Search from "./../../components/Search";
import HeartIcon from "./../../components/HeartIcon";
import BookIcon from "./../../Assets/icones/book/Group.png";
import VideoIcon from "./../../Assets/icones/video/Shape.png";

function Details(props) {
  const heroe = props.location.heroes;
  console.log(heroe)
  return (
    <Container>
      <div className="fundo">
        <p>{heroe.name}</p>
      </div>
      <div className="content">
        <Header >
          <img src={Logo} alt="marvel image" />
          <div className="search">
            <Search />
          </div>
        </Header>
        <div className="main">
          <div className="left">
            <div className="top">
              <h5>{heroe.name}</h5>
              <HeartIcon heroe={heroe} />
            </div>
            <p className="desc">
              {heroe.description}
            </p>
            <div className="footer-info">
              <div className="card-footer">
                <div className="card">
                  <p>Quadrinhos</p>
                  <div>
                    <img src={BookIcon} alt="book icon" />
                    <span> {heroe.comics.available}</span>
                  </div>

                </div>
                <div className="card">
                  <p>Filmes</p>
                  <div>
                    <img src={VideoIcon} alt="video icon" />
                    <span> {heroe.events.available}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container >
  );
}

export default Details;