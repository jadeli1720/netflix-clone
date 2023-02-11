import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa';

export default function SearchForm({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false);

  const activateSearch = () => !searchActive ? setSearchActive(true) : setSearchActive(false);

  return (
    <div className='search'>
      <Form className='d-flex align-items-center'>
        <div className={` inputContainer + ${searchActive ? 'toggleSearch' : ''}`}>
          <Form.Control
            className={`${searchActive ? 'toggleSearch' : ''} `}
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            type='search'
            placeholder="Search movies & TV Shows"
        />
        </div>
        <Button className='ms-2 searchButton' onClick={activateSearch}>
          <FaSearch />
        </Button>
      </Form>
    </div>
  )
}

