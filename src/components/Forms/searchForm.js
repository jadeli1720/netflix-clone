import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <div className='search'>
      <div className='searchIconContainer'>
        <FaSearch />
      </div>
      {/* <div>
        <input
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          type='text'
          placeholder="Search movies as TV Shows"
          active={searchActive}
        />
      </div> */}
    </div>
    
  )
}

