import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Heart from "./../../Assets/icones/heart/Path Copy 7.svg";
import Heart2 from "./../../Assets/icones/heart/Path Copy 2@1,5x.svg";
import * as FavoriteActions from "./../../store/ducks/Favorites/actions";
import { useDispatch, useSelector } from "react-redux";


function HeartIcon({ heroe }) {
  const [toggle, setToggle] = useState(false);
  const favorites = useSelector((state) => state.Favorites);
  const dispatch = useDispatch();
  const handleAddFavorite = (heroe) => {
    dispatch(FavoriteActions.addFavorite(heroe));
  };
  const handleRemoveFromFavorite = (id) => {
    dispatch(FavoriteActions.removeFavorite(id));
  };
  useEffect(() => {
    const index = favorites.findIndex(element => element.id === heroe.id);
    if (index >= 0) {
      setToggle(!toggle);
    }
  }, []);
  return (
    <Container onClick={() => {
      setToggle(!toggle)
    }} >
      {!toggle &&
        <img src={Heart2} alt="icone coração" onClick={() => {
          handleAddFavorite(heroe)
        }} />
      }
      {toggle &&
        <img src={Heart} alt="icone coração" onClick={() => {
          handleRemoveFromFavorite(heroe.id)

        }} />
      }
    </Container>
  );
}

export default HeartIcon;