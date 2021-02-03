import React, { useEffect, useState } from 'react';

import { Input } from './styles';
import * as SearchActions from "./../../store/ducks/Search/actions";
import { useDispatch, useSelector } from "react-redux";


function Search({ color }) {
  const dispatch = useDispatch();

  const heroeName = useSelector(state => state.Search)
  return (
    <>
      <Input type="text" list="heroes" color={color} placeholder="Procure por Heróis" value={heroeName.searchValue} onChange={(event) => {
        dispatch(SearchActions.searchHeroesRequest(event.target.value, 20, 0, "name"));

      }}
      />

    </>
  );
}

export default Search;