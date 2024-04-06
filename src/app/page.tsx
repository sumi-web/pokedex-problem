'use client';
import { useCallback, useState } from 'react';
import PokedexTable from './components/Pokemon/PokedexTable';
import useDebounce from './hooks/useDebounce';
import FilterablePokedexTable from './components/Pokemon/FilterablePokedexTable';

export default function Home() {
  const [searchText, setSearchText] = useState('');

  const [selectedType, setSelectedType] = useState('');

  const debounceValue = useDebounce(searchText, 300);

  const handleSearchValue = useCallback((value: string) => {
    setSearchText(value);
  }, []);

  const handleSelectTypeChange = useCallback((type: string) => {
    setSelectedType(type);
  }, []);

  return (
    <>
      <FilterablePokedexTable
        selectedType={selectedType}
        searchValue={searchText}
        handleSearchValue={handleSearchValue}
        handleSelectTypeChange={handleSelectTypeChange}
      />
      <PokedexTable searchText={debounceValue} selectType={selectedType} />
    </>
  );
}
