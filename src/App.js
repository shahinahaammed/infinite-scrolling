import { useState } from 'react';
import './App.css';
import useBookSearch from './hooks/useBookSearch';

function App() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    function handleChange(e) {
      setQuery(e.target.value)
      setPageNumber(1)
    }

    const {
      books,
      hasMore,
      loading,
      error
    } = useBookSearch(query, pageNumber)
  return (
    <>
      <input type="text" onChange={handleChange} />
      {books.map(book =>{
        return <div key={book}>{book}</div>
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>

    </>
  );
}

export default App;
