import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handleSubmit = value => {
    setQuery(value);
  };

  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;
