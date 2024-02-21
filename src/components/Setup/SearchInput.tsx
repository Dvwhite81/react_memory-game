import { SyntheticEvent, useState } from 'react';

interface SearchInputProps {
  setGameCategory: (value: string) => void
  setInputVisible: (value: boolean) => void
}

const SearchInput = ({ setGameCategory, setInputVisible }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    // Might have to verify results before starting
    if (searchTerm !== '') {
      setGameCategory(searchTerm);
      setInputVisible(false);
    }
  }

  return (
    <form id="search-form" onSubmit={handleClick}>
      <button
        id="search-close-btn"
        className="btn"
        type="button"
        onClick={() => setInputVisible(false)}
      >
        x
      </button>
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Enter a category"
      />
      <button
        id="search-submit"
        className="btn"
        type="submit"
      >
        Enter
      </button>
    </form>
  )
}

export default SearchInput;
