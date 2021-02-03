import React from 'react';
import HeartIcon from "../HeartIcon";
import { Link } from "react-router-dom";
import { ContainerBody } from './styles';

function card(props) {
  return (
    <ContainerBody>
      {props.heroes.map((heroes, index) => (
        <div className="card zoom" key={index} >

          <Link to={{
            pathname: "/details",
            heroes
          }}>
            <img src={`${heroes.thumbnail.path}/landscape_amazing.${heroes.thumbnail.extension}`} alt="cars heroe" className="border " />
          </Link>

          <div>
            <p>{heroes.name}</p>
            <HeartIcon heroe={heroes} />
          </div>
        </div>
      )
      )}
    </ContainerBody>
  );
}

export default card;