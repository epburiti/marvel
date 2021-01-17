import React from 'react';

import { Input } from './styles';

function Search({ color }) {
  return (
    <Input type="text" color={color} placeholder="Procure por Heróis" />
  );
}

export default Search;