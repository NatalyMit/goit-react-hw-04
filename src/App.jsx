import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { getPhotos } from './apiService/apiService';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Loader } from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages, total } = await getPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevState => [...prevState, ...results]);
        setIsVisible(page < Math.ceil(total_pages / total));

        console.log(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const handleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(false);
    setIsVisible(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />;
      {images.length > 0 && <ImageGallery images={images} />}
      {isVisible && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading' : 'Load More'}
        </LoadMoreBtn>
      )}
      {!images.length && !isEmpty && <p>Lets begin search 😏</p>}
      {isError && <ErrorMessage error={isError} />}
      {isLoading && <Loader />}
      {isEmpty &&
        toast('You have not entered one character. Please enter a word.', {
          duration: 2000,
        })}
    </>
  );
}

export default App;
