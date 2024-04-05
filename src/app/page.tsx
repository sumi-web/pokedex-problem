'use client';
import { useState } from 'react';
import FilterHeader from './components/Pokemon/FilterHeader';
import PokedexTable from './components/Pokemon/PokedexTable';
import useDebounce from './hooks/useDebounce';

export default function Home() {
  const [searchText, setSearchText] = useState('');

  const debounceValue = useDebounce(searchText, 300);

  const handleSearchValue = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      <FilterHeader
        searchValue={searchText}
        handleSearchValue={handleSearchValue}
      />
      <PokedexTable searchText={debounceValue} />
    </>
  );
}
