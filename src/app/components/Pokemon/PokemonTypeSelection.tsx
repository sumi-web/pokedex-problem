import React, { useEffect, useState } from 'react';
import SelectBox from '../common/Select';

interface Props {
  selectedType: string;
  handleSelectTypeChange: (v: string) => void;
}

const PokemonTypeSelection = ({
  selectedType,
  handleSelectTypeChange,
}: Props) => {
  const [pokemonTypeList, setPokemonList] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch('https://pokeapi.co/api/v2/type/')
        .then((res) => res.json())
        .then((json) => {
          console.log('json found', json);
          const typeResults = json.results.map((type: any) => type.name);
          setPokemonList(typeResults);
        })
        .catch((e) => {
          console.log('err in fetching pokemon types', e);
        });
    })();
  }, []);

  return (
    <SelectBox
      list={pokemonTypeList}
      selectedType={selectedType}
      handleSelectTypeChange={handleSelectTypeChange}
    />
  );
};

export default PokemonTypeSelection;
