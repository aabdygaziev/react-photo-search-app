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
    <div className='sticky top-0 w-full text-center pt-2 text-gray-600 mb-4 pt-5 bg-indigo-200'>
      <form onSubmit={handleSubmit} className="w-full">
        <input className="border border-blue-500 w-1/4 bg-white h-10 px-5 pr-16 py-2 rounded-lg text-md font-bold focus:outline-none"
          type="search" 
          name='search' 
          id='search'
          placeholder="Type here"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="ml-4 bg-indigo-500 hover:bg-blue-500 text-slate-900 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-lg "><strong>Search</strong></button>
      </form>
      <div class="w-full border-t border-slate-400 mt-6"></div>
      
    </div>
  );
}

export default Search;