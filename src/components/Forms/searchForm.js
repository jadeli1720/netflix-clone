import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm({ searchTerm, setSearchTerm }) {
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleSearchClick = () => !toggleSearch ? setToggleSearch(true) : setToggleSearch(false);

  return (
    <div className='search'>
      {/* Needs a shadow for lighter backgrounds */}
      <button className='searchIcon'>
        <FaSearch />
      </button>
      {/* <div className='inputContainer'>
        <input
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          type='text'
          placeholder="Search movies as TV Shows"
          // active={searchActive}
        />
      </div> */}
    </div>
    
  )
}

