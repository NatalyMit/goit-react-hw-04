import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error('This is an error!');
    }
    onSubmit(query);
    setQuery('');
  };
  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //   autocomplete="off"
          //   autofocus="true"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">
          Search <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
