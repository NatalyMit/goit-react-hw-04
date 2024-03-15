import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

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
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.inputStyle}
          type="text"
          //   autocomplete="off"
          //   autofocus="true"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
        <button className={css.buttonForm} type="submit">
          Search <FiSearch size="16px" />
        </button>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter="8"
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duraction: 4000,

            style: {
              background: '#fff',
              color: '#000',
              fontSize: '16px',
              border: '1px solid #000',
              padding: '10px',
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
