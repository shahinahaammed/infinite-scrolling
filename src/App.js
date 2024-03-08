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

    useBookSearch(query, pageNumber)
  return (
    <>
      <input type="text" onChange={handleChange} />
      <div></div>
    </>
  );
}

export default App;
