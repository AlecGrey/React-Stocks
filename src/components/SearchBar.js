import React from 'react';

const SearchBar = ({ currentSort, handleSort, handleFilter }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name='sort' checked={ currentSort === 'Alphabetically' } onChange={ handleSort }/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name='sort' checked={ currentSort === 'Price' } onChange={ handleSort }/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={ handleFilter }>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
