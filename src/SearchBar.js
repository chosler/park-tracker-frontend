import React from 'react'

const SearchBar=(props)=>{

  return (
    <div className="search-bar">
      <select onChange={props.toggleSearchType}>
        <option>By Name</option>
        <option>By State</option>
      </select>
      <input onChange={props.handleSearchChange} value={props.searchTerm} placeholder="🔍"/>
    </div>
  )
}

export default SearchBar