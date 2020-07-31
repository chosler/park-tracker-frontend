import React from 'react'

const SearchBar=(props)=>{

  return (
    <div className="search-bar">
      <select className="search-bar-options" onChange={props.toggleSearchType}>
        <option>By Name</option>
        <option>By State</option>
      </select>
      <input className="search-input" onChange={props.handleSearchChange} value={props.searchTerm} placeholder="🔍"/>
    </div>
  )
}

export default SearchBar