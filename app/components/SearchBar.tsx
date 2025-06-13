'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Your search logic here
  };

  return (
    <form onSubmit={handleSearch} className="max-w-[700px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-white rounded-[16px] sm:rounded-[50px] p-2 sm:p-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] relative overflow-hidden">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Enter a city name..."
          className="flex-1 px-4 sm:px-6 py-3 border-none outline-none text-base bg-transparent w-full"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 sm:px-8 py-3 rounded-[16px] sm:rounded-[50px] font-medium hover:bg-[#2c7aa8] transition-all duration-300 cursor-pointer w-full sm:w-auto mt-2 sm:mt-0"
        >
          Find Activities
        </button>
      </div>
    </form>
  );
} 