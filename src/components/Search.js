import React, { useState } from 'react';

const Search = ({ addQuery }) => {
  const [val, setVal] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!val) return "";
    addQuery(val);
    setVal("");
  }

  return (
    <div className='pt-2 relative mx-auto text-gray-600 mb-4'>
      <form onSubmit={handleSubmit}>
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" 
          name='search' 
          id='search'
          placeholder="Type here"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="text-center text-slate-800 bg-indigo-500 shadow-lg shadow-indigo-500/50 border-2 border-gray-300 w-20 ml-1 h-10 rounded-lg text-md"><strong>Search</strong></button>
      </form>
    </div>
  );
}

export default Search;