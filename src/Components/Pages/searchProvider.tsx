import React, { useState } from 'react';
import { SearchContext } from '../../Content/searchContext';


export const SearchProvider = ({ children }:any) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};