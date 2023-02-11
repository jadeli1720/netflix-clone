import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

export default function SearchForm({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false);

  const activateSearch = () => !searchActive ? setSearchActive(true) : setSearchActive(false);

  return (
    <div className='search'>
      {/* <button className='searchIcon' onClick={activateSearch}>
        <FaSearch />
      </button>
      <div className={`inputContainer + ${searchActive ? 'toggleSearch' : ''}`}>
        <input
        className={`${searchActive ? 'toggleSearch' : ''}`}
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          type='text'
          placeholder="Search movies & TV Shows"
        />
      </div> */}
      <Form className='d-flex align-items-center'>
        <Button className='me-2 searchButton' onClick={activateSearch}>
          <FaSearch />
        </Button>
        <div className={` inputContainer + ${searchActive ? 'toggleSearch' : ''}`}>
          <Form.Control
            className={`${searchActive ? 'toggleSearch' : ''} `}
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            type='search'
            placeholder="Search movies & TV Shows"
        />
        </div>

      </Form>
    </div>
  )
}

